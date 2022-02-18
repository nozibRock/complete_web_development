// console.log('fuck of biatch');

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  inputField.value = "";
  return inputValue;
}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const fieldValue = parseFloat(fieldValueInText)
    return fieldValue;
}
function updateTotal(fieldId, amount) {
  console.log(fieldId, amount);

  const previousTotal = getInnerTextValue(fieldId);
  const newTotal = previousTotal + amount;
  document.getElementById(fieldId).innerText = newTotal;
  return newTotal;
}
function updateBalance(amount, isAdding) {
  const previousBalance = getInnerTextValue("balance-total");
  let newBalance;
  if (isAdding == true) {
    newBalance = previousBalance + amount;
  } else {
    newBalance = previousBalance - amount;
  }
  document.getElementById("balance-total").innerText = newBalance;
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    console.log("deposit clicked");
    const amount = getInputValue("deposit-input");
    console.log(amount);

    if (amount > 0) {
      updateTotal("deposit-total", amount);
      updateBalance(amount, true);
    } else {
    }
  });

// handle withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    console.log("withdraw clicked");
    const amount = getInputValue("withdraw-input");
    const balance = getInnerTextValue("balance-total");
    console.log(amount);
    if (amount > 0 && amount < balance) {
      updateTotal("withdraw-total", amount);
      updateBalance(amount, false);
    } else {
    }
  });
