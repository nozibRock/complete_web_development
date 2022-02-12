// console.log("I am in a separate file");

document.getElementById("case-plus").addEventListener('click', function () {
    // console.log('case-plus clicked');
    const caseInput = document.getElementById("case-number");
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
    // console.log(caseNumber);
});
