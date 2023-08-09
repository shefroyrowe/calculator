
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

    Array.from(keys).forEach(key => {
        key.addEventListener('click', (e) => {
            let { value } = e.target;

            //get and display first operand value
            if (key.classList.contains('number') &&
                operator === '') {

                firstNumber += value;
                display.textContent = firstNumber;
                console.log(display.textContent);
            }

            //get and append operator 
            if (firstNumber !== '' &&
                secondNumber === '' &&
                operator === '' &&
                key.classList.contains('operator')
            ) {

                operator = value;
                display.textContent += ' ' + operator + ' ';
                console.log(display.textContent);
            }

            //get and append second operand value
            if (firstNumber !=='' &&
                key.classList.contains('number') &&
                operator !== '') {

                secondNumber += value;
                display.textContent = firstNumber + ' ' + operator + ' ' + secondNumber;
                console.log(display.textContent);
            }

            //run operate/calculate function on input values
            if (value === '=') {
                display.textContent = firstNumber + ' ' + operator + ' ' + secondNumber + ' =';
                console.log(display.textContent);
                mainDisplay.textContent = parseFloat(operate(Number(firstNumber),
                    operator, Number(secondNumber)));
            }

            //clear function
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