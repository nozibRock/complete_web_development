function makeRed() {
    document.body.style.background = 'royalblue';
}

const pinkBtn = document.getElementById('makePink');
// just set the name of the function
pinkBtn.onclick = makePink;
function makePink() {
    document.body.style.background = 'pink';
}

// handle event using anonymous function
const logoutBtn = document.getElementById("logout");
// anonymous function
logoutBtn.onclick = function () {
    document.body.style.background = "gray";
};

// handle by using add eventlisenter
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
  document.body.style.backgroundColor = "goldenrod";
}

// addEventListener 
const hotChocolateButton = document.getElementById("make-hotchocolate");
hotChocolateButton.addEventListener('click', function () {
    document.body.style.backgroundColor = "#8d7066";
})

// direct shortcut
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})