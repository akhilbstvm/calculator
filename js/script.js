
const displayElement = document.getElementById('display');
let currentInput = '';

function updateDisplay() {
    displayElement.value = currentInput || '0' ;
}

function number(number) {
    currentInput += number;
    updateDisplay();
}

function operator(operator) {
        currentInput += operator;
    
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}
function calculateResult() {
    
    let result = new Function('return ' + currentInput)();   
    currentInput = result;
    updateDisplay();
}

function calculateSquare() {
    if (currentInput === '') return;
    let val = new Function('return ' + currentInput)();
    let result = val * val; 
    currentInput = result;
    updateDisplay();
}

function calculateCube() {
    if (currentInput === '') return;
   let val = new Function('return ' + currentInput)();
   let result = val*val*val;
   currentInput=result;
   updateDisplay();
}