const players = document.getElementsByClassName("player");
for (const player of players) {
  console.log(player);
  setPlayerStyle(player);
}

function setPlayerStyle(player) {
  player.style.border = "1px solid royalblue";
  player.style.borderRadius = "15px";
  player.style.margin = "10px";
  player.style.padding = "10px";
}

function addPlayer() {
  const playersContainer = document.getElementById("players");
  const player = document.createElement("div");
  player.classList.add("player");
  console.log(player);
  player.innerHTML = `
        <h4 class="player-name">New Player</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias repellat fuga neque iure ipsa
        quaerat et ut praesentium repudiandae, ullam omnis debitis quasi vero deserunt aliquam, ab perspiciatis est!</p>
    `;
  console.log(player);
  setPlayerStyle(player);
  playersContainer.appendChild(player);
}

document.getElementById("players").addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() == "div") {
    event.target.style.backgroundColor = "purple";
  } else {
    event.target.parentNode.style.backgroundColor = "purple";
  }
});
