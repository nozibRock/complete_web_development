const number = 42;
try {
    number = 98;
} catch (error) {
    console.log(error);
}

console.log(number);