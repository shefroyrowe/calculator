
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
//operations variables
/*---------------------*/

let firstNumber = '';
let secondNumber = '';
let operator = '';


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
function evalExpression() {
    const keys = document.getElementsByTagName('button');
    let display = document.querySelector('.secondary-display');
    let mainDisplay = document.querySelector('.display');

    //convert button nodes to an array of button nodes and 
    //add event listener to each button with for each function
    Array.from(keys).forEach(key => {
        key.addEventListener('click', (e) => {
            let { value } = e.target;

            //get and display first operand value
            if (key.classList.contains('number') &&
                operator === '') {

                //limit operand length to 7 characters
                if (firstNumber.length < 7) {
                    firstNumber += value;
                }
                //append to secondary display
                display.textContent = firstNumber;
            }

            //get and append (operator) sign
            if (firstNumber !== '' &&
                secondNumber === '' &&
                operator === '' &&
                key.classList.contains('operator')
            ) {

                operator = value;
                //append to value showing in secondary display   
                display.textContent += ' ' + operator + ' ';
            }

            //get and append second operand value
            if (firstNumber !== '' &&
                key.classList.contains('number') &&
                operator !== '') {

                //limit operand length to 7 characters   
                if (secondNumber.length < 7) {
                    secondNumber += value;
                }
                //append to (first value) and (operator sign) then 
                //set as secondary display value   
                display.textContent = firstNumber + ' ' + operator + ' ' + secondNumber;
            }

            //run (operate) function on inputed values when the equal('=') butten is pushed
            if (value === '=') {

                //add an equal sign to epression being displayed
                display.textContent = firstNumber + ' ' + operator + ' ' + secondNumber + ' =';

                //use Number() method to convert strings values to 
                //intiger inside operate() function
    
                //store operate() function results in variable (calculate)
                let calculate = operate(Number(firstNumber),
                operator, Number(secondNumber));

                //function to fix floating point numbers to a set amount of decimal points 
                //n == number to operate on
                //p == number of values we want after the decimal point
                const limitPrecision = (n,p) => (0|n*10**p)/10**p;

                //run calculate through limitPrecision function and append to main display
                mainDisplay.textContent = limitPrecision(calculate, 4);
            }

            //clear function (DEL)
            if (value === 'del') {
                firstNumber = '';
                secondNumber = '';
                operator = '';
                display.textContent = '0';
                mainDisplay.textContent = '';
            }

        });
    });
}

evalExpression();

//limit input to 7 numbers per operand
//deal with decimal point, one per operation
//handle chained expressions
//eval only two operands at a time
