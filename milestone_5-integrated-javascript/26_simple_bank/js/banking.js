// handle deposit button event
document.getElementById("deposit-button").addEventListener('click', function () {
  console.log("deposit button clicked");
  // get the amount deposited
  const depositInput = document.getElementById("deposit-input");
  const newDepositAmountText = depositInput.value;
  console.log(newDepositAmountText);
  const newDepositAmount = parseFloat(newDepositAmountText);
  console.log(newDepositAmount);

  // update deposit total
  const depositTotal = document.getElementById("deposit-total");
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  const newDepositTotal = previousDepositAmount + newDepositAmount;

  depositTotal.innerText = newDepositTotal;
});