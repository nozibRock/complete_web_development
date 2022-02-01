// math
// const myNumber = -5;
// const output = Math.abs(myNumber);
// console.log(output);

// const yourNumber = 6.0398;
// const result = Math.ceil(yourNumber);
// console.log(result);

// const floorNumber = 21.999;
// const floorResult = Math.floor(floorNumber);
// console.log(floorResult);

// const roundNumber = 21.5;
// const roundResult = Math.round(roundNumber);
// console.log(roundResult);


// for (let index = 0; index < 20; index++) {
//     const randomResult = Math.random() * 6;
//     const rounded = Math.round(randomResult)
//     console.log(rounded);
// }


// swap
let first = 50;
let second = 79;
console.log(first, second);
// first approach
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// destructuring
[first, second] = [second, first]
console.log(first, second);
