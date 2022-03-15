class Support {
  name;
  designation = "Support Web Dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

const aamir = new Support("Aamir Khan", "BD");
// console.log(aamir);
const salman = new Support("Solaiman Khan", "Dubai");
// console.log(salman);

const shahRukh = new Support("Shah Rukh Khan", "Delhi");
const akshay = new Support("Akshay Kumar", "Amritsar");
// console.log(shahRukh);
// console.log(akshay);

aamir.startSession();
salman.startSession();
console.log(aamir, salman, shahRukh, akshay);