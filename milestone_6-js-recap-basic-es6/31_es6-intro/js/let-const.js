// break up with var
let balance = 1240;
balance = 1340;
const userName = "janpakhi potas potas";
const weTogether = "ami " + userName;
console.log(weTogether);
// userName = 'moyna pakhi';

const numbers = [45, 23, 89, 60];
console.log(numbers);
// numbers = [99, 145, 3]; // not allowed
numbers.push(555);
numbers[1] = 333;
console.log(numbers);

const student = { roll: 101, name: "mofij", job: "intern" };
console.log(student);
student.name = "MOfazzol";
// student = { name: 'mofazzol' };
console.log(student);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
  sum = sum + number;
}
console.log(sum);
