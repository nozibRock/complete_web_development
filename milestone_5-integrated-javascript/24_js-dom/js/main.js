console.log(25);
console.log(999);

for (let index = 1; index <= 5; index++) {
  console.log(index);
}

// console.log(document.body);

const student = { name: "kissmot Ali", age: 16, height: 60 };

// const blogTitles = ['h3', 'h3']
const blogTitles = document.getElementsByTagName("h3");
console.log(blogTitles);

for (const h3 of blogTitles) {
  console.log(h3.innerText);
}

const blogDetails = document.getElementsByTagName("p");
for (const p of blogDetails) {
  console.log(p.innerText);
}

// explore getElementById
const secondTitle = document.getElementById("second-title");
secondTitle.style.textAlign = "center";
const thirdTitle = document.getElementById("third-title");
thirdTitle.innerText = "Title updated by JS";
thirdTitle.style.backgroundColor = "salmon";
thirdTitle.style.padding = "10px";
thirdTitle.style.margin = "20px";

// create and add element by using JS
// create the element
const list = document.createElement("li");
list.innerText = "Blog-5";
// where to
const unOrderedList = document.getElementById("blog-list");

// append new element
unOrderedList.appendChild(list);

// add article
const article = document.createElement("article");
article.classList.add("blog");

article.innerHTML = `
    <h3>My Awesome Blog-5</h3>
    <p>Vitae a error culpa quas quos tempora. Ipsa iusto, nostrum inventore cupiditate molestiae dolorum!</p>
`;

// parent of article
const blogSection = document.getElementById("blogs");
blogSection.appendChild(article);

// explore getElementsByClassName
const blogs = document.getElementsByClassName("blog");
for (const blog of blogs) {
  blog.style.border = "2px solid royalBlue";
  blog.style.borderRadius = "10px";
  blog.style.margin = "5px";
  blog.style.padding = "5px";
}
