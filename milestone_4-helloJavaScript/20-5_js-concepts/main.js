// core concepts

// variable (let, const) javascript var, let, const

// array, loop (while, for), conditionals, function 

// leapYear
// odd even
// factorial (while, for)

// New home work
// 1. celsiusToFahrenheit(celsius) {  } তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে
function celsiusToFahrenheit(celsius) {
    var far = (celsius * 9/5) + 32;
    return far;
}
var fahrenheit = celsiusToFahrenheit(19);
console.log(fahrenheit.toFixed(0));
// fahrenheitToCelsius
function FahrenheitToCelsius(far) {
    var cel = (far - 32) * 5/9;
    return cel;
}
var celsius = FahrenheitToCelsius(67);
console.log(celsius.toFixed(0));

// 2. grade calculation কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।
 function grade(marks){
  let obtainedGrade;
   if (marks>=80 && marks <= 100){
    obtainedGrade = console.log("You Got A+") ///A+
   } else if(marks>=70 && marks < 80){
    obtainedGrade = console.log("You Got A")/// A 
   } else if(marks>=60 && marks < 70){
    obtainedGrade = console.log("You Got A-")/// A-
   } else if(marks>=50 && marks < 60){
    obtainedGrade = console.log("You Got B") /// B
   } else if(marks>=40 && marks < 50){
    obtainedGrade = console.log("You Got C") /// C
   } else if(marks>=33 && marks < 40){
    obtainedGrade = console.log("You Got D")/// D
   } else if (marks<33 && marks >=0){
    obtainedGrade = console.log("You Got F")/// F
  } else{
    obtainedGrade =console.log("Please input Your obtained Marks from 1 to 100")
  }
  return obtainedGrade;
 }
 const prompt = require("prompt-sync")({sigint: true});
 let gotMarks = prompt("Please Input Your Obtained Marks: ");
 var yourGrade = grade(gotMarks);
 console.log(yourGrade);
// 3. simple interest

for (let index = 50; index <= 80; index++) {
    if (index % 2 != 0) {
        console.log(index);
    } 
}
