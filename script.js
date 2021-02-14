class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
  }

  clear() {
    this.previousOperandText = "";
    this.currentOperandText = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber() {}

  chooseOperation() {}

  compute() {}

  updateDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelectorAll("[data-equals]");
const deleteButtons = document.querySelectorAll("[data-delete]");
const clearButtons = document.querySelectorAll("[data-clear]");
const previousOperandText = document.querySelectorAll(
  "[data-previous-operand]"
);
const currentOperandText = document.querySelectorAll("[data-current-operand]");
