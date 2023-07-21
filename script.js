const calculator = {
   displayValue: '0',
   firstOperand: null,
   needOperand2: false,
   operator: null,
};

function inputDigit(digit){
    const { displayValue, needOperand2 } = calculator; //same as calculator.displayValue
    //change value of 'displayValue' if it's value is zero >>
    //otherwise append to it

    if(needOperand2 === true){
        calculator.displayValue = digit;
        calculator.needOperand2 = false;
    }else{
        calculator.displayValue = displayValue === '0' ? digit :
        displayValue + digit;
    }

    console.log(calculator);
}

function inputDecimal(dot){
    //if displayValue does not already have a decimal point
    if(!calculator.displayValue.includes(dot)){
        //append a decimal point
        calculator.displayValue += dot;
    }
}

function handleOperator (nextOperator){
   //destructure the properties on the calculator object
   const { firstOperand, displayValue, operator  } = calculator

   // parseFloat > convert string content of >>
   //> displayValue to a floating point number
    const inputValue = parseFloat(displayValue);

    if(operator && calculator.needOperand2){
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }

  //verity that firstOperand is null and that the inputValue is not NaN
  if(firstOperand == null && !isNaN(inputValue)){
     //update the firstOperand property
     calculator.firstOperand = inputValue;
  }else if(operator){
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.needOperand2 = true;
  calculator.operator = nextOperator;

  console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator){
    if(operator === '+'){
        return firstOperand + secondOperand;
    }else if(operator === '-'){
        return firstOperand - secondOperand;
    }else if(operator === '*'){
        return firstOperand * secondOperand;
    }else if(operator === '/'){
        return firstOperand / secondOperand;
    }
        return secondOperand;
    
}

function resetCalculator(){
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.needOperand2 = false;
    calculator.operator = null;
    console.log(calculator);
}

function updateDisplay(){
    //get display element
    const display = document.querySelector('.display');

    //update the value of the display >>
    //>element with the contents of  'calculator displayVlue'
    display.textContent = calculator.displayValue;
}

updateDisplay();

const calculatorButtons = document.querySelector('.calculator');
calculatorButtons.addEventListener('click', (e)=>{
    //get clicked element
    const { target } = e;// is equivalent to (const target = event.target;)

    //validate cliked element (if is button)
    //if not button, exit function
    if(!target.matches('button')){
        return;
    }

    if(target.classList.contains('operator')){
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
      }

    if(target.classList.contains('all-clear')){
        console.log('clear', target.value);
        return;
    }
        inputDigit(target.value);
        updateDisplay();
    
    
});

