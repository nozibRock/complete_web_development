// 1. write 3 variables (number, string, boolean) তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।
/* var numberVar = 5576;
console.log(numberVar);
console.log(typeof numberVar);
var stringVar = "blubber";
console.log(stringVar);
console.log(typeof stringVar);
var booleanVar = true;
console.log(booleanVar);
console.log(typeof booleanVar); */

// 2. 2 variables using (let, const) তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।
/* let greeter = "hey hi";
console.log(greeter);
greeter = "hello";
console.log(greeter);
const greeting = "say Hi";
console.log(greeting); */

// 3. Simple Math Operations() +, -, *, /, %) দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।
/* let x = 5;
let y = 2;
var z = x + y;
console.log(z);
var z = x - y;
console.log(z);
var z = x * y;
console.log(z);
var z = x / y;
console.log(z); */

// 4. comparison () তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।
/* let p = 5;
if (p < 8) {
  console.log("p is less than 8");
} else if (p > 8) {
  console.log("p is greater than 8");
} else if (p == 8) {
  console.log("p is equal to 8");
} else if (p != 8) {
  console.log("p is not equal to 8");
} else if (p <= 8) {
  console.log("p is less than or equal to 8");
} else if (p >= 8) {
  console.log("p is greater than or equal to 8");
} else {
    console.log("not a valid integer");
} */

// 5. two conditions. case-1: fulfill both conditions. case-2: fulfill at least one condition তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 
/* const a = 3;
const b = -2;
if (a > 0 && b < 0) {
    console.log("a is greater than 0 and b is smaller than 0");
} else if (a < 0 || b > 0) {
    console.log("a is less than 0 or b is greater than 0");
} else {
    console.log("not a valid integer")
} */
// 6. if-else তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো |
/* function greetings(time) {
    if (time <= 10) {
        console.log("Good morning");
    } else if (time <= 16) {
        console.log("Good day");
    } else {
        console.log("Good evening");
    }
}
const dayTime = greetings(15);
console.log(dayTime); */
//7. while loop to display 7 to 19 all numbers. only display odd numbers including 7 to 19 তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
// না পারলে এই ভিডিও দেখো: 17_5-3 More while loops, odd numbers, even numbers
/* let num = 7;
console.log("Odd numbers of 7 to 19");
while (num <= 19) {
  if (num % 2 != 0) {
    console.log(num);
  }
  num++;
} */
// 8. declare an array. number of elements. update or change 4th position element. add or remove elements. check whether a specific value exists in the array তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
let fruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Blueberries",
  "Avocado",
  "Blackcurrant",
  "Carambola"
];
let fruitsLength = fruits.length;
console.log(fruitsLength);
fruits.unshift("satsuma");
fruits[3] = ("pluots");
fruits.push("mandarin");
fruits.splice(6, 1);
console.log(fruits);


// 9. use any for loop to display every elements of an array

// 10. you have an array of numbers. display only the numbers bigger than 80

// 11. write a function that takes three numbers and returns the multiplication of the three numbers

// 12. declare an object and change any property of that object.
