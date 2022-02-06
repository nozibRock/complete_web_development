// simple
for (let index = 1; index <= 5; index++) {
    console.log(index);
}

function consoleNumber(i) {
    if (i > 5) {
        return i;
    }
    console.log(i);
    consoleNumber(i+1);
}
consoleNumber(1);
