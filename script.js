const display = document.getElementById("display");
let currentInput = '';
let operator = null;
let firstOperand = null;
let resultDisplayed = false;  

display.style.fontSize = "4rem";  


function appendNumber(number) {
    
    if (resultDisplayed) {
        currentInput = '';  
        resultDisplayed = false;  
    }
    currentInput += number;
    display.value = currentInput;
}


function appendOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);

        if (isNaN(firstOperand)) {
            display.value = "Error";
            resetCalculator();
            return;
        }
        
        operator = op;
        currentInput = '';
    } else if (!resultDisplayed) {
        calculate(); 
        operator = op;  
    }
}


function calculate() {
    if (firstOperand !== null && operator !== null) {
        let secondOperand = parseFloat(currentInput);
        
        if (isNaN(secondOperand)) {
            display.value = "Error";
            resetCalculator();
            return;
        }

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
                if (secondOperand === 0) {
                    display.value = "Cannot divide by 0";
                    resetCalculator();
                    return;
                }
                result = firstOperand / secondOperand;
                break;
        }

        display.value = result;
        currentInput = result.toString(); 
        firstOperand = null;
        operator = null;
        resultDisplayed = true;
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
    resultDisplayed = false;
    display.value = '';
}


document.querySelectorAll('.switch input').forEach(input => {
    input.addEventListener('change', function() {
        document.body.className = this.id;
    });
});
