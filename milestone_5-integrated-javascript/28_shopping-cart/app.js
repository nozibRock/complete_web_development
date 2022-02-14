// console.log("I am in a separate file");

function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncreasing == true) {
     productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
     productNumber = parseInt(productNumber) - 1;
  }

  productInput.value = productNumber; 
  // update case total
  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = productNumber * price;
}
// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
  console.log("phone plus clicked");
  updateProductNumber("phone", 796, true);
})
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 796, false);
});
// handle case increase decrease events
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
    updateProductNumber("case", 59, false);
});
