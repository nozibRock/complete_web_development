console.log("I am riednrom summary js file");

const articles = document.getElementsByTagName("span");
for (const article of articles) {
  article.style.backgroundColor = "steelblue";
  article.style.display = "block";
  article.style.color = "white";
  article.style.margin = "16px 0";
}

const fugit = document.getElementById("special-blog");
// fugit.innerText = "New Fugit";
fugit.innerHTML = `
    <h4>Special inner html</h4>
    <div>
        <ul>
            <li>ami pari </li>
            <li>LOL inside li</li>
        </ul>
    </div>
`;

const friends = document.getElementById("friends");
// console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

// create element
const friend = document.createElement("li");
friend.innerText = "Friend-5";
friends.appendChild(friend);
