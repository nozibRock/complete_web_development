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


// inchTofeet
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadi inches in feet', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('nani inches in feet', feet);

var nanaInches = 168;
var feet = inchToFeet(nanaInches);
console.log('nana inches in feet', feet);

// mile to km
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('marathon in km: ', marathon);


// odd-even
/* const number = 4;
const remainder = number % 2;
console.log(remainder == 0); 
console.log(number % 2 == 0); */

function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        console.log(number + " " +'is an even number');
    } else if (number % 2 == 1 && number % 2 != 0) {
        console.log(number + " " +'is an odd number' );
    }
}

isEvenOrOdd(1641);
isEvenOrOdd(1892);