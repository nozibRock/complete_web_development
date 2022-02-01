// recap
function largestElement(numbers) {
    let max = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element > max) {
            max = element;
        }
    }
}
function smallestElement(numbers) {
    let min = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element < min) {
            min = element;
        }
    }
}

// duplicate
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names) {
    const unique = [];
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        console.log(element);
    }
    for (const elements of names) {
     if (unique.indexOf(elements) == -1) {
         unique.push(elements);
     }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);