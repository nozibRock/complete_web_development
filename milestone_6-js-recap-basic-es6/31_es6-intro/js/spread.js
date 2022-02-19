const numbers = [23, 65, 99, 21, 34, 396];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65, 21, 34, 198);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray);

const numbers2 = [22, ...numbers , 88]; ;
numbers.push(555);
console.log(numbers);
console.log(numbers2);
