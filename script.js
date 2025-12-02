let currentInput = "";
let previousInput = "";
let operator = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById("display").value = currentInput;
}

function performOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    document.getElementById("display").value = "";
}

function calculateResult() {
    if (operator === null || currentInput === "" || previousInput === "") return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = null;
    previousInput = "";
    document.getElementById("display").value = currentInput;
}