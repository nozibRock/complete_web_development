/* console.log("i am here");

// alert("Dowa is coming!!");

const dowaComing = () => {
  alert("Dowa is coming. hide this now!");
};

const askPicnic = () => {
  const response = confirm("Are you going to picnic?");
  console.log(response);
  if (response === true) {
    alert("amake fee ta bKash kore de");
  } else {
    console.log("wwmy !!! we will miss you!!!");
  }
};

const askName = () => {
  const name = prompt("What is your name?");
  if (name) {
    console.log(name);
  }
}; */



const addItem = () => {
  const nameField = document.getElementById("product-name");
  const name = nameField.value;
  if (!name) {
    return;
  }
  // display in the ui
  displayProduct(name);

  // add to local storage
  addProductToCart(name);

  //clear
  nameField.value = "";
};

const displayProduct = (name) => {
  const ulContainer = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = name;
  ulContainer.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProductToCart = (name) => {
  const cart = getCart();
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const placeOrder = () => {
  document.getElementById("products").textContent = "";
  localStorage.removeItem("cart");
};


const displayLocalStorageCart = () => {
  const cart = getCart();
  for (const name in cart) {
    displayProduct(name);
  }
};

displayLocalStorageCart();

const url = document.getElementById("anchor");
const path = url.pathname;
console.log(path);