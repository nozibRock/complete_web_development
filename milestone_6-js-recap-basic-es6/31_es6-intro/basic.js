// variable
var deposit = 4000;
// condition
if (deposit > 5000) {
    
} else if (deposit > 2000) {
    
} else if (deposit == 5000) {
    
} else if (deposit != 5000) {
    
} else if (deposit >= 5000) {
    
} else if (deposit <= 5000) {
    
} else {

}

// array
const numbers = [45, 6587, 124, 45, 1, 365];
const numberCount = numbers.length;
numbers.pop();
numbers.push(111);
numbers[2] = 555;
// chech whether 222 included in the array
if (numbers.indexOf(222) != -1) {
    
}

if (numbers.includes(222)) {
    
}

// loop
// while, for
for (const number of numbers) {
    
}

// function
function fullName(first, second) {
    const name = first + ' ' +second;
    return name;
}
const person = fullName('Rahim', 'Patawary');

// object 
const bottle = { color: 'yellow', contain: 'water', price: 50 }