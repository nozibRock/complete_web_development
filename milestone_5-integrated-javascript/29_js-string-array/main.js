// case-convert
const anthem = "Amar Sonar Bangla Ami Tomai Valobashi";
const search = "valo";

const userInput = "blACkPinK";
const savedUserName = "blackPink";

// console.log(userInput);
// console.log(userInput.toLowerCase());
// console.log(savedUserName);
// console.log(savedUserName.toLowerCase());

if (userInput.toLowerCase() == savedUserName.toLowerCase()) {
//   console.log("user exists");
}


// string-search
const products = [
  'Dell G5 15-5500 Core i7 10th Gen RTX 2060 6GB Graphics 15.6" FHD Gaming Laptop',
  "iPhone 13 Pro",
  'Dell Inspiron 14 5410 2-in-1 Core i7 11th Gen 16GB RAM 14" Touch Laptop',
  'Walton Passion BP7800 Core i7 8th Gen 15.6" HD Laptop',
  "HTC Wildfire E2 Plus Phone",
  'Dell XPS 15 9510 Core i7 11th Gen RTX 3050 Ti 4GB Graphics 15.6" 3.5K OLED Touch Laptop',
];

// const searching = "laptop";
const searching = "dell";

// indexOf
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    //   output.push(product);
    }
}
// console.log(output);

for (const product of products) {
  if (product.toLowerCase().includes(searching.toLowerCase()) != -1) {
    //   output.push(product);
  }
}
// console.log(output);

//starts with
for (const product of products) {
  if (product.toLowerCase().startsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);