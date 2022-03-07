function makeRed() {
  document.body.style.background = "royalblue";
}

const pinkBtn = document.getElementById("makePink");
// just set the name of the function
pinkBtn.onclick = makePink;
function makePink() {
  document.body.style.background = "pink";
}

// handle event using anonymous function
const logoutBtn = document.getElementById("logout");
// anonymous function
logoutBtn.onclick = function () {
  document.body.style.background = "gray";
};

// handle by using add eventlisenter
const goldenButton = document.getElementById("make-goldenrod");
goldenButton.addEventListener("click", makeGoldenRod);
function makeGoldenRod() {
  document.body.style.backgroundColor = "goldenrod";
}

// addEventListener
const hotChocolateButton = document.getElementById("make-hotchocolate");
hotChocolateButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "#8d7066";
});

// direct shortcut
document.getElementById("light-blue").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

// event - common
// using function
function handleJustFunctionClick() {
  const clickingMethod = document.getElementById("clicking-method");
  clickingMethod.innerText = "set by using function";
}

// direct
document.getElementById("handle-event").addEventListener("click", function () {
  const p = document.getElementById("clicking-method");
  p.innerText = "set by direct add event listener";
});

// direct with input field
document.getElementById("update-name").addEventListener("click", function () {
  const nameField = document.getElementById("name-field");
  const p = document.getElementById("clicking-method");
  p.innerText = nameField.value;
  // nameField.value = '';
});

// 1. add button event handler
const submitButton = document.getElementById("submit-comment");

submitButton.addEventListener("click", function () {
  console.log("clicked");
  // 2. get user comment
  const commentBox = document.getElementById("new-comment");
  console.log(commentBox);
  const userComment = commentBox.value;

  // 3. create comment paragraph
  const newComment = document.createElement("p");
  newComment.innerText = userComment;

  // 4. append the comment
  const commentContainer = document.getElementById("comment-container");
  commentContainer.appendChild(newComment);

  // 5. clean the comment box
  commentBox.value = "";
});

document.getElementById("delete-btn").addEventListener("click", function () {
  document.getElementById("secret-info").style.display = "none";
});

// focus
document
  .getElementById("delete-confirm")
  .addEventListener("focus", function () {
    document.body.style.backgroundColor = "lightcoral";
  });

//blur
document.getElementById("delete-confirm").addEventListener("blur", function () {
  document.body.style.backgroundColor = "white";
});

//keydown
/* document
  .getElementById("delete-confirm")
  .addEventListener("keydown", function () {
    const deleteField = document.getElementById("delete-confirm");
    console.log(deleteField.value);
  }); */

//keypress
/* document
  .getElementById("delete-confirm")
  .addEventListener("keypress", function () {
    const deleteField = document.getElementById("delete-confirm");
    console.log(deleteField.value);
  }); */

//keyup
document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (event) {
    /* const deleteField = document.getElementById("delete-confirm");
    console.log(deleteField.value); */
    const deleteBtn = document.getElementById("delete-btn");
    if (event.target.value == "delete") {
      deleteBtn.removeAttribute("disabled");
    } else {
      deleteBtn.setAttribute("disabled", true);
    }
  });

//change
document
  .getElementById("delete-confirm")
  .addEventListener("change", function () {
    const deleteField = document.getElementById("delete-confirm");
    console.log(deleteField.value);
  });

function toggleDeleteButton(event) {
  const deleteBtn = document.getElementById("delete-btn");
  if (event.target.value == "delete") {
    deleteBtn.removeAttribute("disabled");
  } else {
    deleteBtn.setAttribute("disabled", true);
  }
}
document
  .getElementById("delete-confirm")
  .addEventListener("keyup", toggleDeleteButton);
addEventListener("change", toggleDeleteButton);

document
  .getElementById("second-item")
  .addEventListener("click", function (event) {
    console.log("second1 item clicked");
    event.stopPropagation();
    /* event.stopImmediatePropagation(); */
  });
document
  .getElementById("second-item")
  .addEventListener("click", function (event) {
    console.log("second2 item clicked");
  });
document
  .getElementById("second-item")
  .addEventListener("click", function (event) {
    console.log("second3 item clicked");
  });
// ul
document
  .getElementById("list-container")
  .addEventListener("click", function () {
    console.log("ul clicked");
  });
// section
document
  .getElementById("section-container")
  .addEventListener("click", function () {
    console.log("section clicked");
  });

// const items = document.getElementsByClassName("item");
// for (const item of items) {
//   item.addEventListener("click", function (event) {
//     // document.getElementById('item-container').removeChild(item);
//     event.target.parentNode.removeChild(event.target);
//   });
// }

document.getElementById("add-item").addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = "Brand New Item";
  li.classList.add("item");
  const parent = document.getElementById("item-container");
  parent.appendChild(li);
});

document
  .getElementById("item-container")
  .addEventListener("click", function (event) {
    console.log(event.target);
    event.target.parentNode.removeChild(event.target);
  });

function handleClickGreen() {
  document.body.style.backgroundColor = "green";
}

document
  .getElementById("email-field")
  .addEventListener("keyup", function (event) {
    console.log(event.target.value);
  });

/* document.getElementById('mouse-header').addEventListener('mousemove', function () {
    console.log('mouse is moving...giving me shurshuri')
}); */
/* document.getElementById('mouse-header').addEventListener('mouseenter', function () {
    console.log('mouse is entering...giving me shurshuri')
}); */

document
  .getElementById("mouse-header")
  .addEventListener("mouseout", function () {
    console.log("mouse tumi kotha na koiya jaio na");
  });
