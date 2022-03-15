// simple
/* for (let index = 1; index <= 5; index++) {
    console.log(index);
} */

/* function consoleNumber(i) {
    if (i > 5) {
        return i;
    }
    console.log(i);
    consoleNumber(i+1);
}
consoleNumber(1); */

// sum
/* let sum = 0;
for (let index = 5; index >= 1; index--) {
    sum = sum + index;
}
console.log(sum); */

/* function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(--i);
}
console.log(sum(5)); */

// factorial
/* let factorial = 1;
for (let index = 4; index >= 1; index--) {
    factorial = factorial * index;
}
console.log(factorial); */

/* function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(--i);
}
console.log(factorial(4)); */

// search
/* const products = [
  { name: "iphone 14", price: 60000 },
  { name: "samsung galaxy 14", price: 18000 },
  { name: "dell laptop", price: 50000 },
  { name: "lenovo yoga laptop", price: 55000 },
  { name: "Asus laptop", price: 45000 },
  { name: "Smart watch samsung", price: 15000 },
  { name: "Apple watch", price: 12000 },
  { name: "One Plus phone 4", price: 41000 },
]; */

/* function searchProducts(products, searchText) {
    for (const product of products) {
        if (product.name.includes(searchText)) {
          console.log(product.name);
        }
    }
}
searchProducts(products, "phone");
console.log("matched"); */

// break-down
/* for (const product of products) {
    if (product.price < 40000) {
        // break;
        continue;
    }
    console.log(product);
}
console.log("after the loop"); */

/* function compare(a, b) {
  if (a == b) {
    return true;
  } else {
    return false;
  }
}
const result = compare(15, "15");
console.log(result); */

/* function compare(a, b) {
  if (a.toString() === b) {
    return true;
  } else {
    return false;
  }
}

const result = compare(25, 25);
console.log(result); */

// console.log("123" + 123);

/* let a = "hi";
let b = "there";
console.log(a + b); */


const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
  if (i == 5) {
    continue;
  }
  console.log(array[i]);
}