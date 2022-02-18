// console.log('fuck of biatch');

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  inputField.value = "";
  return inputValue;
}
function updateTotal(fieldId, amount) {
    const totalTag = document.getElementById(fieldId);
    const previousTotalText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    console.log("deposit clicked");
    const amount = getInputValue("deposit-input");
    console.log(amount);
    updateTotal("deposit-total", );
  });
