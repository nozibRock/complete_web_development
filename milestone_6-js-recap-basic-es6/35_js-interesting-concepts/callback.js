function welcomeMessage(name, greetHandler) {
  greetHandler(name);
}

// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise'];
// const myObj = { name: 'Tom chikoo', age: 11 };
function greetMorning(name) {
  console.log("Good morning", name);
}
function greetEvening(name) {
  console.log("Good Evening", name);
}
function greetAfternoon(name) {
  console.log("Good afternoon", name);
}
welcomeMessage("Tom Hanks", greetMorning);
welcomeMessage("Shakib Al Hasan", greetAfternoon);
welcomeMessage("Bapparaj", greetEvening);