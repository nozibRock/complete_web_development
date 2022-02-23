const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=5000")
    .then((res) => res.json())
    .then((data) => displayBuddies(data));
};

loadBuddies();

const displayBuddies = (data) => {
  console.log(data);
  const buddies = data.results;
  const buddiesContainer = document.getElementById("buddies");
  for (const buddy of buddies) {
    const paragraph = document.createElement("p");
    paragraph.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} \n  Email: ${buddy.email}`;
    buddiesContainer.appendChild(paragraph);
  }
};
