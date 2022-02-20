// 1. let and const
const hubby = "Omor Sani";
let phone = "iPhone 13 Pro";
phone = "Samsung Galaxy S22 Ultra 5G";
// 2. default
// 5. spread or three dots (...)
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
// 3. template string
const myNotes = `I am mojnu of ${hubby}. I don't have a laili. I have a ${phone}.`;
console.log(myNotes);

// 4. arrow function
// function square(x) {
//     return x * x;
// }
const square = x => x * x;
console.log(square(9));