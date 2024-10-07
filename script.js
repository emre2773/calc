const display = document.getElementById("display");
let currentInput = '';
let operator = null;
let firstOperand = null;
display.style.fontSize = "4rem";  



function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}


function appendOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    }
}


function calculate() {
    if (firstOperand !== null && operator !== null) {
        let secondOperand = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }
        display.value = result;
        currentInput = '';
        firstOperand = null;
        operator = null;
    }
}


function deleteNumber() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}


function resetCalculator() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    display.value = '';
}


document.querySelectorAll('.switch input').forEach(input => {
    input.addEventListener('change', function() {
        document.body.className = this.id;
    });
});
