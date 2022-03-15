// console.log("api.js connected");

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    // .then((data) => console.log(data));
    .then((data) => displayUsers(data));
}

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function displayUsers(data) {
  // console.log(data);
  const userList = document.getElementById("users");
  for (const user of data) {
    // console.log(user);
    // console.log(user.name);
    const userName = user.name;
    const userEmail = user.email;
    const listOfUsers = document.createElement("li");
    // listOfUsers.innerText = userName;
    listOfUsers.innerText = `User name: ${userName} \n Email: ${userEmail}`;
    userList.appendChild(listOfUsers);
  }
}
