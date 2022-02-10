// Problem 1:
function anaToVori(ana) {
  // validation
  if (ana == null) {
    return "Value can not be empty";
  }
  if (ana < 0 || typeof ana != "number") {
    return "Invalid parameter value";
  }
  //return calculated value
  let vori = ana * 0.0625;
  return vori;
}

let anaVori = anaToVori(64);
console.log(anaVori);

// Problem 2:
// takes 3 parameter and return total cost
function pandaCost(
  numberOfShingaraToBuy,
  numberOfSamosaToBuy,
  numberOfJalebiToBuy
) {
  const shingaraPrice = 7;
  const samosaPrice = 10;
  const jalebiPrice = 15;

  //validations
  if (
    numberOfShingaraToBuy == null ||
    numberOfSamosaToBuy == null ||
    numberOfJalebiToBuy == null
  ) {
    return "Values can not be empty";
  }

  if (
    numberOfShingaraToBuy < 0 ||
    numberOfSamosaToBuy < 0 ||
    numberOfJalebiToBuy < 0
  ) {
    return "Product Quantity can not be negative";
  }

  if (
    numberOfShingaraToBuy % 1 != 0 ||
    numberOfSamosaToBuy % 1 != 0 ||
    numberOfJalebiToBuy % 1 != 0
  ) {
    return "All parameter value should be Integer!";
  }

  // total price of per products
  let totalShingaraPrice = shingaraPrice * numberOfShingaraToBuy;
  let totalSamosaPrice = samosaPrice * numberOfSamosaToBuy;
  let totalJalebiPrice = jalebiPrice * numberOfJalebiToBuy;

  //return the total cost
  let totalPandaCost = totalShingaraPrice + totalSamosaPrice + totalJalebiPrice;
  return totalPandaCost;
}
let totalCost = pandaCost(10, 5, 5);
console.log(totalCost);

// Problem 3:
function picnicBudget(numberOfPeoples) {
  // validations
  if (numberOfPeoples == null) {
    return "Value can not be empty";
  }
  if (numberOfPeoples < 0 || typeof numberOfPeoples != "number") {
    return "Invalid parameter value";
  }

  let picnicSubscription = 0;
  let basicSubscription = 0;
  let discountSubscription = 0;
  let remainingDiscountSubscription = 0;

  if (numberOfPeoples <= 100) {
    picnicSubscription = 5000 * numberOfPeoples;
  } else if (numberOfPeoples > 100 && numberOfPeoples <= 200) {
    basicSubscription = 100 * 5000;
    remainingDiscountSubscription = numberOfPeoples - 100;
    picnicSubscription = basicSubscription + remainingDiscountSubscription * 4000;
  } else {
    basicSubscription = 100 * 5000;
    discountSubscription = 100 * 4000;
    remainingDiscountSubscription = numberOfPeoples - 200;
    picnicSubscription = basicSubscription + discountSubscription +remainingDiscountSubscription * 3000;
  }
  return picnicSubscription;
}
let totalPicnicBudget = picnicBudget(1640);
console.log(totalPicnicBudget);

// Problems 4:
function oddFriend(friendsName) {
  if (friendsName.length <= 0) {
    return "Length can not be empty";
  }
  if (!(friendsName instanceof Array)) {
    return "Passed argument is not an array";
  }
  let oddLengthElement = friendsName[0];
  for (let i = 0; i < friendsName.length; i++) {
    let element = friendsName[i];
    // update the value
    if (element.length % 2 != 0) {
      oddLengthElement = element;
      return oddLengthElement;
    }
  }
}
let friend = oddFriend([
  "Fariha",
  "Onim",
  "Fairuz",
  "Gourab",
  "Shrabanti",
  "kotha",
  "Tamim",
  "niloy",
  "tanzila",
]);
console.log(friend);
