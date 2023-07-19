const num1 = 0;
const num2 = 0;
const operator = '';

function operate (operator, num1, num2){
    let result = '';
    
    if(operator == '*'){
        result = multiply(num1, num2);
    }else if(operator == '+'){
        result = sumNums(num1, num2);
    }else if(operator == '-'){
        result = subtract(num1, num2);
    }else if(operator == '/'){
        result = divide(num1, num2);
    }
}