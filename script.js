const display = document.getElementById("display");
let currentInput = '';
let operator = null;
let firstOperand = null;
display.style.fontSize = "4rem";  // 3rem boyutunda yazı


// Sayı eklemek için
function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

// Operatör eklemek için
function appendOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    }
}

// Hesaplama yapmak için
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

// Son sayıyı silmek için
function deleteNumber() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

// Hesap makinesini sıfırlamak için
function resetCalculator() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    display.value = '';
}

// Tema değiştirme için radyo butonları
document.querySelectorAll('.switch input').forEach(input => {
    input.addEventListener('change', function() {
        document.body.className = this.id;
    });
});
