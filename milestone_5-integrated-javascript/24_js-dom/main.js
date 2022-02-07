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


// explore getElementsByClassName
const blogs = document.getElementsByClassName("blog");
for (const blog of blogs) {
  blog.style.border = "2px solid royalBlue";
  blog.style.borderRadius = "10px";
  blog.style.margin = "5px";
  blog.style.padding = "5px";
}
