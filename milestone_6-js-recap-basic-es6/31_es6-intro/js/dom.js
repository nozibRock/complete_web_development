document.getElementById("add-border").addEventListener("click", function () {
  console.log("add border clicked");
  const container = document.getElementById("friend-container");
  container.style.border = "3px solid green";
});

function addBackgroundColor() {
  const friends = document.getElementsByClassName("friend");
  for (const friend of friends) {
    friend.style.backgroundColor = "lightblue";
    friend.style.margin = "10px";
    friend.style.padding = "10px";
    friend.style.padding = "10px";
    friend.style.borderRadius = "6px";
  }
}
document.getElementById("add-border").addEventListener("click", function () {
  console.log("add border clicked");
  const container = document.getElementById("friend-container");
  container.style.border = "3px solid green";
});
document.getElementById("add-friend").addEventListener("click", function () {
  const container = document.getElementById("friend-container");
  const friendDiv = document.createElement("div");
  friendDiv.classList.add("friend");
  friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias voluptates voluptatem ullam quasi explicabo, porro sunt, iusto vel, harum debitis repellendus aspernatur dicta voluptatum nulla odio nesciunt. Deserunt, fuga?</p>
    `;
  container.appendChild(friendDiv);
});
