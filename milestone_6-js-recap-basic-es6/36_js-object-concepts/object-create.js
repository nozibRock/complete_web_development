// using object literal
const student = { name: 'Shakib Al Hasan', job: 'cricketer'};
// constructor
const person = new Object();
// console.log(person);

const human = Object.create(null);
// console.log(human);

const athlete = Object.create(student);
// console.log(athlete);
// console.log(athlete.job);

// class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const pep = new People('Manush', 12);
// console.log(pep);

// function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);