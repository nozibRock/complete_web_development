// math
// const myNumber = -5;
// const output = Math.abs(myNumber);
// console.log(output);

// const yourNumber = 6.0398;
// const result = Math.ceil(yourNumber);
// console.log(result);

// const floorNumber = 21.999;
// const floorResult = Math.floor(floorNumber);
// console.log(floorResult);

// const roundNumber = 21.5;
// const roundResult = Math.round(roundNumber);
// console.log(roundResult);


// for (let index = 0; index < 20; index++) {
//     const randomResult = Math.random() * 6;
//     const rounded = Math.round(randomResult)
//     console.log(rounded);
// }


// swap
// let first = 50;
// let second = 79;
// console.log(first, second);
// first approach
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// destructuring
// [first, second] = [second, first];
// console.log(first, second);


// max
//  const business = 850;
//  const minister = 750;
//  const army = 900;

//  if (business > minister) {
//      console.log('Business person er pola is bigger');
//  } else {
//      console.log('minister er pola is bigger');
//  }

/* if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else {
    console.log('army is bigger');
} */

// var max = Math.max(business, minister, army);
// console.log('largest is', max);


/* function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
} */

// const largest = findLargest(354, 241);
// console.log('largest is', largest);

// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three
/* function findLargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    } else {
        return third;
    }
} */

// const largest = findLargest(354, 241, 1542);
// console.log('largest is', largest);
// Task 2: Write a function to find the smallest of three numbers.
/* function findSmallest(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    } else {
        return third;
    }
} */

// const smallest = findSmallest(354, 241, 1542);
// console.log('Smallest number is', smallest);


// sum
// const numbers = [44, 23, 34, 32, 54, 5, 78];
// let sum = 0;
/* for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(index, element);
    sum += element;
} */
// console.log(sum);

/* function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
} */

// const total = arrayTotal([32, 45, 67, 44, 23, 34, 32, 54, 5, 78]);
// console.log('array total', total);


// largest-element
/* function largestElement(numbers) {
    let largest = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
} */

// Task: find the lowest or smallest element of an array
/* function smallestElement(smallNum) {
    let smallest = smallNum[0];
    for (let i = 0; i < smallNum.length; i++) {
        const object = smallNum[i];
        if (object < smallest) {
            smallest = object;
        }
    }
    return smallest;
} */

// const ages = [12, 54, 2, 34, 75, 32, 12];
// const oldest = largestElement(ages);
// console.log('Oldest biatch', oldest);
// const smallAges = smallestElement(ages);
// console.log("Smallest age holder is: ", smallAges);
// const oldest2 = largestElement([-12, -6, -17]);
// console.log('oldest2', oldest2);


// fibonacci
// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]

/* 
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
16th = 15th + 14th
119th = 118th + 117th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th 
*/
const fibo = [0, 1];
for (let index = 2; index < 10; index++) {
    fibo[index] = fibo[index - 1] + fibo[index - 2];
}
console.log(fibo);

function fibonacciSeries(numberOfElements) {
    const fibo = [0, 1];
    for (let index = 2; index < numberOfElements; index++) {
        fibo[index] = fibo[index - 1] + fibo[index - 2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(13);
console.log(fiboSeries);

function fibonacciSeries(numberOfElements) {
    if (typeof numberOfElements != 'number') {
        return 'Please enter a valid number';
    }
    if (numberOfElements < 2) {
        return 'Please enter a positive number greater than 1';
    }
    const fibo = [0, 1];
    for (let index = 2; index < numberOfElements; index++) {
        fibo[index] = fibo[index - 1] + fibo[index - 2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(13);
console.log(fiboSeries);


// fibonacci-recursive
function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
const fiboElement = fibonacci(8);
console.log(fiboElement);

function fibonacciSeries(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fibo = fibonacciSeries(n-1);
    fibo[n] = fibo[n-1] + fibo[n-2];
    return fibo;
}
const fiboSeries = fibonacciSeries(8);
console.log(fiboSeries);
/* var a = 5; var b = 8; var c = 4; var d = 6; var highest = Math.max(a, b, c, d); console.log(highest);
var mathFloor = 13.67;
console.log(Math.floor(mathFloor));
function add(a, b){
  return a + b;
}
console.log(add("adam" + "eve"));
var result = 100 + Math.random()*100;
console.log(result);

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == 'a'){
    count++;
  }
}
console.log(count) */