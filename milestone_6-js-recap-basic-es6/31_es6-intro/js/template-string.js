const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `kobita tumi shopnocharini`;
const multiLine = "This is my first line. \n" +
  "this is my second line.\n" +
  "third line text here\n" +
  "fourth line text here";

// console.log(multiLine);

const multiLineNew = `this is is multi line
this is second line
this is third line
fourth line
`;
// console.log(multiLineNew);

const friends = ["abdul", "babul", "kabul", "siblu"];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>';
const old2 = '<h3 class="friend-name">Friend-5</h3>';
const new1 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new2 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

// console.log(new1);
// console.log(new2);

const first = "Mamun";
const last = "Chowdhury";
const fullOld = "This person name is " + first + " " + last;
// console.log(fullOld);

const fullNew = `This person name is: ${first} ${last}. Has money ${
  (friends.length + 100) * 5000}. He lives in Dhaka.`;
console.log(fullNew);