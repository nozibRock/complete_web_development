// function declaration
function add(num1, num2) {
  // const sum = num1 + num2;
  // return sum;
  return num1 + num2;
}
const sum1 = add(1305, 1347);
// console.log(sum1);

// function expression
const add2 = function add2(num1, num2) {
  return num1 + num2;
};
const sum2 = add2(1305, 1347);
// console.log(sum2);

// document.getElementById('my-btn').onclick = function handleEvent(){

// }

// function expression
const add3 = function (num1, num2) {
  return num1 + num2;
};

// function expression (anonymous)
const sum3 = add3(1305, 1347);
// console.log(sum3);

//arrow function
const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(15, 17);
console.log("arrow sum function", sum4);
