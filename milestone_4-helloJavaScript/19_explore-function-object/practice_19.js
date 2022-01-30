// একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
function multiplyTable(num) {
    var length = 10;
    document.write("Problem number 1: Multiplication table of " + num);
    for (let index = 1; index < length; index++) {
        document.write("<br>" + index + " * " + num + " = " + (index * num));
    }
}
multiplyTable(69);

// একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
function upperToLower(text) {
    document.write("<br>" + "<br>" + "Problem number 2: uppercase or regularCase to lowercase: ");
    let string = text.toLowerCase();
    document.write("<br>" + text + " : " + string);
}
var someText = "SOME TEXT WITH MIXED CASE LETTERS"; 
upperToLower(someText);
var someText = "Some text with mixed Case Letters"; 
upperToLower(someText);

// fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
function fullName(fName, lName) {
    document.write("<br>" + "<br>" + "Problem number 3: ");
    document.write("<br>" + "First Name: " + fName);
    document.write("<br>" + "Last Name: " + lName);
    document.write("<br>" + "Full Name: " + fName + ' ' + lName);
}
var PlayerFirstName = "Md Nozib";
var PlayerLastName = "Ud Dowla";

fullName(PlayerFirstName, PlayerLastName);

// একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।
function square(number) {
    document.write("<br>" + "<br>" + "Problem number 4: Square Number: ");
    var result = number * number;
    var squareNumber =  document.write("<br>" + "Square of 6 is " + result);
    return squareNumber;
}

var myNumber = 6;
square(myNumber);

// pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
// const pizza = {
//  toppings: ['cheese', 'sauce', 'pepperoni'],
//  crust: 'deep dish',
//  serves: 2
// }
// এবং pepperoni প্রিন্ট করবা।
var pizza = {
    toppings: ['tomatoes', 'garlic', 'cheese', 'oregano', 'extra virgin olive oil', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2,
    name: "Neapolitan Pizza"
};

var pepperoni = pizza.toppings[6];
document.write("<br>" + "<br>" + " Problem Number 5: ");
document.write("<br>" + "Neapolitan Pizza's special toppings is " + pepperoni);