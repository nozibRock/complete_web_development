// recap
// 1. variable 
var favoriteBook = '4 hour work week';

// 2. array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand';

bookList.push('Small Giants');
bookList.pop();

// 3. conditionals
if (bookList[1] == 'hooked') {
    // console.log('I am hooked');
}
else {
    // console.log('I am not hooked');
}

// 4. Loop
// while loop
var i = 0; // loop variable
while (i < 15) {
    // console.log(i);
    // console.log('looping looping looping');
    i++;
}

// for loop
for (var i = 0; i < 15; i++) {
    // console.log(i);
}

// function
function startFan() {
    console.log('walk towards the switch')
    console.log('press the switch');
}
// call the function
// startFan();

// console.log('eat breakfast');
// console.log('Drink tea');
// console.log('take a shower');
// startFan();
var country = "bd";
var city = 'Dhaka';
var location = 'Gulistan';
// startFan();


// parameter
function bringSingara(taka) {
    console.log('singara er jonno', taka, 'tk dise');
    console.log('Mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
// console.log('ei nen', bringSingara(250), 'ta singara');

var money = 250;
// var singara = bringSingara(money);
// console.log('ei nen', singara, 'ta singara');

// multiple-parameter
function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

// console.log('result value: ', addTwoNumbers(21, 59));

var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(secondNumber, firstNumber);
console.log('result value: ', result);

function multiplyTwoNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}

var total = multiplyTwoNumbers(5, 100);
console.log('total after multiplication', total);

// biyog koro duita sonkha
function subtractionTwoNumbers(num1, num2) {
    var subtractionResult = num2 - num1;
    return subtractionResult;
}

var total = subtractionTwoNumbers(5, 100);
console.log('total after subtraction', total);

// vabfol ber koro
function divideTwoNumbers(num1, num2) {
    var division = num2 / num1;
    return division;
}

var totalDivision = divideTwoNumbers(5, 100);
console.log('total after Division: ', totalDivision);