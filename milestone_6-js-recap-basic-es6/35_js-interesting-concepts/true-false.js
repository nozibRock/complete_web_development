/* 
Falsy: 
false
0
empty string
undefined
null
NaN
-------------------
Truthy:
true
any number (positive or negative )
any string including single whitespace, '0', 'false'
[]
{}
anything else that is not falsy will be truthy
*/
// const x = false;
// const x = true;
// const x = -25;
// const x = 0;
// const x = "Sulaiman ibn Dawud";
// const x = "";
// const x = "false";
// let x = null;
// let x = parseInt('hello');
// let x = [];
let x = {};
console.log("value of x is:", x);
if (x) {
  console.log("variable is truthy");
} else {
  console.log("variable is Falsy");
}