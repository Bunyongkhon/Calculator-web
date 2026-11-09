
const display = document.querySelector(".display");
const numberAll = document.querySelectorAll(".number");
const signAll = document.querySelectorAll(".sign");


let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let currentNumber = 0;
let result = 0;
let waitingSecondNumber = false;
let editingSecondNumber = false;

numberAll.forEach(function(button) {
    button.addEventListener("click", function() {

        if (waitingSecondNumber) {
            secondNumber = Number(button.textContent);
            display.textContent = firstNumber + "" + operator + "" + secondNumber;
            waitingSecondNumber = false;

        }
        else if (operator !== "" && secondNumber !== 0) {
            secondNumber = Number(String(secondNumber) + button.textContent);
            display.textContent = firstNumber + "" + operator + "" + secondNumber;
        } else if (display.textContent === "0") {
            display.textContent = button.textContent;
            firstNumber = Number(display.textContent);
        } else {
            display.textContent += button.textContent;
            firstNumber = Number(display.textContent);
        }
    });
});

signAll.forEach(function(button) {
    button.addEventListener("click", function() {

        if (button.textContent === "+") {
            firstNumber = Number(display.textContent);
            operator = "+";
            secondNumber = 0;
            waitingSecondNumber = true;
            editingSecondNumber = true;
            display.textContent = firstNumber + "+";


        } else if (button.textContent === "-") {
            firstNumber = Number(display.textContent);
            operator = "-";
            secondNumber = 0;
            waitingSecondNumber = true;
            editingSecondNumber = true;
            display.textContent = firstNumber + "-";

        } else if (button.textContent === "x") {
            firstNumber = Number(display.textContent);
            operator = "x";
            waitingSecondNumber = true;
            editingSecondNumber = true;
            display.textContent = firstNumber + "x";

        } else if (button.textContent === "/") {
            firstNumber = Number(display.textContent);
            operator = "/";
            waitingSecondNumber = true;
            editingSecondNumber = true;
            display.textContent = firstNumber + "/";

        } else if (button.textContent === ".") {

            if (!display.textContent.includes(".")) {
                display.textContent += ".";
            }

        } else if (button.textContent === "%") {
            if (!display.textContent.includes("%")) {
                display.textContent += "%";
                secondNumber = (firstNumber * secondNumber) / 100;
            }

        } else if (button.textContent === "-/+") {

            if (editingSecondNumber) {
                secondNumber = secondNumber * -1;

                display.textContent =
                    firstNumber + " " + operator + " " +"("+ secondNumber+")";

            } else {
                firstNumber = firstNumber * -1;
                display.textContent = firstNumber;
            }

        } else if (button.textContent === "AC") {
            firstNumber = 0;
            secondNumber = 0;
            result = 0;
            operator = "";
            waitingSecondNumber = false;
            editingSecondNumber = false;
            display.textContent = "0";

        } else if (button.textContent === "=") {
            if (operator === "+") {
                result = firstNumber + secondNumber;
                display.textContent = result;

            } else if (operator === "-") {
                result = firstNumber - secondNumber;
                display.textContent = result;

            } else if (operator === "x") {
                result = firstNumber * secondNumber;
                display.textContent = result;

            } else if (operator === "/") {
                result = firstNumber / secondNumber;
                display.textContent = result;
            }
        }
    });
});
