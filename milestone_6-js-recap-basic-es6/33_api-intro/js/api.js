console.log("api.js connected");

function loadData() {
  fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  )
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
  console.log(data);
}
