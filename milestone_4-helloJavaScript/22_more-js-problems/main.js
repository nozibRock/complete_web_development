// recap
/* function largestElement(numbers) {
    let max = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element > max) {
            max = element;
        }
    }
}
function smallestElement(numbers) {
    let min = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element < min) {
            min = element;
        }
    }
} */

// duplicate
/* const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names) {
    const unique = [];
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        console.log(element);
    }
    for (const elements of names) {
     if (unique.indexOf(elements) == -1) {
         unique.push(elements);
     }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); */

// reverse
/* const greetings = "Hello, how are you?";

function reverseString(text) {
  let reverse = "";
  for (const letter of text) {
    reverse = letter + reverse;
  }
  return reverse;
}

const reversed = reverseString(greetings);
console.log(reversed); */

// input - error
/* function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const firstTotal = add(73, 8);
console.log(firstTotal);
const secondTotal = add(45, 981);
console.log(secondTotal);

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}
const firstResult = multiply(73, 8);
console.log(firstResult);
const secondResult = multiply(45, 981);
console.log(secondResult); */

// add - multiply
/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

/* function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  // wood calculation
  const chairWoodQuantity = chairQuantity * perChairWood;
  const tableWoodQuantity = tableQuantity * perTableWood;
  const bedWoodQuantity = bedQuantity * perBedWood;

  // adding all wood quantity
  const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
  return totalWood;
}

const firstOption = woodCalculator(6, 1, 3);
console.log("Total Wood need: ", firstOption, "cft"); */

// divisible - by
/* for (let index = 1; index <= 50; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      console.log("foobar");
    } else if (index % 3 == 0) {
      console.log("foo");
    } else if (index % 5 == 0) {
      console.log("bar");
    } else {
      console.log(index);
    }  
} */

// cheapest - phone
/* const phones = [
  { name: "samsung s5", price: 45000, camera: 10, storage: 32 },
  { name: "walton m32", price: 15000, camera: 8, storage: 8 },
  { name: "shaomi m3", price: 12000, camera: 8, storage: 16 },
  { name: "oppo a2", price: 17000, camera: 8, storage: 32 },
  { name: "nokia n95", price: 8000, camera: 8, storage: 4 },
  { name: "htc h81", price: 25000, camera: 8, storage: 16 },
];

let cheapest = phones[0];
for (const phone of phones) {
  // compare price only
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
// console.log(cheapest); */

// total-price
/* const products = [
  { name: "laptop", price: 43000 },
  { name: "shirt", price: 500 },
  { name: "watch", price: 3680 },
  { name: "phone", price: 55000 },
];

let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);

const cart = [
  { name: "laptop", price: 43000, quantity: 1 },
  { name: "shirt", price: 500, quantity: 8 },
  { name: "watch", price: 3680, quantity: 3 },
  { name: "phone", price: 55000, quantity: 1 },
];
let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal += productTotal;
    // cartTotal = cartTotal + productTotal;
}
console.log(cartTotal); */


// animal-count
function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
      const count = miles * animalDensityFirst10Miles;
      return count;
    } else if (miles <= 20) {
      const firstDenseAnimals = 10 * animalDensityFirst10Miles;
      const restMiles = miles - 10;
      const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
      const totalAnimals = firstDenseAnimals + secondDenseAnimals;
      return totalAnimals;
    } else {
      const firstDenseAnimals = 10 * animalDensityFirst10Miles;
      const secondDenseAnimals = 10 * animalDensitySecond10Miles;
      const restMiles = miles - 20;
      const RestDenseAnimals = restMiles * animalDensityRestMiles;
      const totalAnimals =
        firstDenseAnimals + secondDenseAnimals + RestDenseAnimals;
      return totalAnimals;
    }
}

const animals = animalCount(35);
console.log("Total Animals: " + animals);