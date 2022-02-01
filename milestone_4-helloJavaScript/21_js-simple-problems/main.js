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
let first = 50;
let second = 79;
// console.log(first, second);
// first approach
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// destructuring
[first, second] = [second, first]
// console.log(first, second);


// max
 const business = 850;
 const minister = 750;
 const army = 900;

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

var max = Math.max(business, minister, army);
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
function findLargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    } else {
        return third;
    }
}

const largest = findLargest(354, 241, 1542);
console.log('largest is', largest);
// Task 2: Write a function to find the smallest of three numbers.
function findSmallest(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    } else {
        return third;
    }
}

const smallest = findSmallest(354, 241, 1542);
console.log('Smallest number is', smallest);