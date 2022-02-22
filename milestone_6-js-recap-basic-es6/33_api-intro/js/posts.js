function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    //   .then((data) => console.log(data));
    .then((data) => displayPosts(data));
}
loadPosts();

function displayPosts(posts) {
  console.log(posts);
  const postContainer = document.getElementById("posts");
  
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add('post');
    const postTitle = post.title;
    const postBody = post.body;
    div.innerHTML = `
        <h3>${postTitle} </h3>
        <p>${postBody} </p>
        `;
        postContainer.appendChild(div)
    console.log(post.title);
    console.log(post);
  }
}


function addAPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            userId: 1,
            title: 'My new post',
            body: 'This is my posts'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
}