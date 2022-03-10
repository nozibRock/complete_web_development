// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x,y);
// const [x, y] = [42, 65]
// console.log(x, y);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
// console.log(boxify(90, 34));
// const [first, second] = [90, 34];
// console.log(first, second);
// const [first, second] = boxify(90, 34);
// console.log(first, second);

const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie);

// object destructuring
// const { name, age } = { name: 'alu', age: 14 };
const { name, age } = { id: 12, name: "Allu Arjun", salary: 56000, age: 39 };

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "garmin",
    },
  },
};
