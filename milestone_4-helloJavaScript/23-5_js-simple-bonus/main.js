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

function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(--i);
}
console.log(factorial(4));