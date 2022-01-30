var dailyWork = ['mouse', 'keyboard', 'monitor', 'speakers', 'motherboard', 'processor'];

var i = 1;

while (i <= 10) {
    for (let x = 0; x < dailyWork.length; x++) {
        const element = dailyWork[x];
        console.log(element);
        
    }
    console.log(i);
    i++;
}


// recap

// variable 
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

// array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.push('KraKen');
partners.pop();

// conditionals
if (bookPrice < 120) {
    console.log('I will buy this book')
}
else {
    // console.log('Mama, kichu discount den na, apni na mama!');
}

// loop
var i = 0;
while (i <= 17) {
    // do some work
    i++;
}

for (var i = 0; i <= 17; i++) {

}

// function

function isMoonUp(time) {
    if (time >= 20 && time <= 4) {
        return true;
    }
    return false;
}

var moonStatus = isMoonUp(21);

// let const

// value of variable could change
let price = 27;
price = 29;
price = 31;

// value of the variable will not change
// const myName = 'lal e lal mr. Helal';
console.log(myName);
myAge = 22;