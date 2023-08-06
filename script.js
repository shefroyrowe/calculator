/*----------------*/
  //math functions
/*----------------*/
function add (a,b){
    return a + b;
}

function sub (a,b){
    return a - b;
}

function divide (a,b){
    return a / b;
}

function multi (a,b){
    return a * b;
}

/*---------------------*/
  //operations variables
/*---------------------*/
const firstNumber = '';
const secondNumber = '';
const operator = '';

/*--------------------*/
  //calculate variable
/*--------------------*/
function operate (firstNumber, operator, secondNumber){
    switch(operator){
        case '+':
            add(firstNumber, secondNumber);
            break;
        case '-':
            sub(firstNumber, secondNumber);
            break;
        case '/':
            divide(firstNumber, secondNumber);
            break;
        case '*':
            multi(firstNumber, secondNumber);
            break;
        default:
            console.log('ERROR');
    }
}