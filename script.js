const num1 = 0;
const num2 = 0;
const operator = '';
const result = '';

//arithmetic functions
function add(num1, num2) {
    return num1 + num2;
 }

 function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}


function operate (operator, num1, num2){
    if(operator == '*'){
        result = multiply();
    }else if(operator == '+'){
        result = add();
    }else if(operator == '-'){
        result = subtract();
    }else if(operator == '/'){
        result = divide();
    }
}
