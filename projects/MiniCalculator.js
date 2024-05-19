var firstNum = document.getElementById("firstNum").value;
var secNum = document.getElementById("secNum").value;
var operator = document.getElementById("operator").value;

function btnCalculate() {
  var firstNumFloatValue = parseFloat(firstNum);
  var secNumFloatValue = parseFloat(secNum);

  if (
    firstNum === "" ||
    firstNum === null ||
    secNum === "" ||
    secNum === null ||
    operator === "" ||
    operator === null
  ) {
    alert("Please fill all fields...");
    return;
  }
}

function btnClear() {}
