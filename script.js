/*----------------*/
//math functions
/*----------------*/
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multi(a, b) {
    return a * b;
}

/*---------------------*/
//operations object
/*---------------------*/
const updateDisplay = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
};

/*--------------------*/
//calculate variable
/*--------------------*/
function operate(a, operator, b) {
    if (operator === '+') {
        return a + b;
    }

    if (operator === '-') {
        return a - b;
    }

    if (operator === '*') {
        return a * b;
    }

    if (operator === '/') {
        return a / b;
    }
}

/*----------------------------------------------*/
//show equation expression in secondary display
/*----------------------------------------------*/
function evaluateEquation() {
    const keys = document.getElementsByTagName('button');
    const display = document.querySelector('.secondary-display');
    const mainDisplay = document.querySelector('.main-display');

    Array.from(keys).forEach(key => {
        key.addEventListener('click', (e) => {
            let { value } = e.target;

            //get and display first operand value
            if (key.classList.contains('number') &&
                updateDisplay.operator === '') {

                updateDisplay.firstNumber += value;
                display.textContent = updateDisplay.firstNumber;
            }

            //get and append operator to firstnumber
            if (isNaN(updateDisplay.firstNumber) === false &&
                key.classList.contains('operator') &&
                updateDisplay.operator === '') {

                updateDisplay.operator = value;
                display.textContent += updateDisplay.operator;
            }

            //get and append second operand value
            if (isNaN(updateDisplay.firstNumber) === false &&
                key.classList.contains('operator') === false &&
                updateDisplay.operator !== '') {

                updateDisplay.secondNumber = value;
                display.textContent += updateDisplay.secondNumber;
            }

            //run operate function on input values
            //append to main display
            if (value === '=' &&
                isNaN(updateDisplay.firstNumber) === false &&
                isNaN(updateDisplay.secondNumber) === false &&
                updateDisplay.operator !== '') {
                    display.textContent += '=';

                mainDisplay.textContent = operate(updateDisplay.firstNumber,
                    updateDisplay.operator, updateDisplay.secondNumber);

            }

            //hook up delete button
            //clear and reset all
                if(value === 'del'){
                    updateDisplay.firstNumber = '';
                    updateDisplay.secondNumber = '';
                    updateDisplay.operator = '';
    
                    display.textContent = 0;
                    mainDisplay.textContent = '';
                }
           

            //evaluate only two operands at a time
            if(isNaN(mainDisplay.textContent) === false &&
               key.classList.contains('operater')){
                
                updateDisplay.firstNumber = mainDisplay.textContent;
                console.log(updateDisplay.firstNumber);
                updateDisplay.operator = value;

                display.textContent = updateDisplay.firstNumber;
                display.textContent += updateDisplay.operator;
            }

        });
    });
}
evaluateEquation();

