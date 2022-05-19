const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSeccondValue = false;

uptateDisplay();

function uptateDisplay() {
  display.value = displayValue;
}

keys.addEventListener("click", function (e) {
  const element = e.target;

  if (!element.matches("button")) return;

  if (element.classList.contains("operator")) {
    // console.log("operator", element.value);
    handleOperator(element.value);
    return;
  }
  if (element.classList.contains("clear")) {
    clear();
    uptateDisplay();
    // console.log("operator", element.value);
    return;
  }

  if (element.classList.contains("decimal")) {
    inputDecimal();
    uptateDisplay();
    // console.log("operator", element.value);
    return;
  }
  //console.log('number', element.value)
  inputNumber(element.value);
  uptateDisplay();
});

function handleOperator(nextOperator) {
  const value = parseFloat(displayValue);

  if (firstValue === null) {
    firstValue = value;
  } else if (operator) {
    const result = calculate(firstValue, value, operator);

    displayValue = String(result);
    firstValue = result;
  }
  waitingForSeccondValue = true;
}

function inputNumber(num) {
  if (waitingForSeccondValue) {
    displayValue = num;
    waitingForSeccondValue = false;
  } else {
    displayValue = displayValue === "0" ? num : displayValue + num;
  }
  console.log(firstValue, operator, waitingForSeccondValue);
}
function calculate(first, second, operator) {
  if (operator == "+") {
    return first + second;
  }else if (operator== "-"){
      return first -second;
  }else if (operator==  "*"){
      return first*second
  }else if(operator=="/"){
      return first/second
  }

  return second;
}

function inputDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
}

function clear() {
  displayValue = "0";
}
