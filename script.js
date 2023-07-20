const calculator = {
   displayValue: '0',
   firstNum: null,
   needSecondNum: false,
   operator: null,
};

function updateDisplay(){
    //get display element
    let display = document.querySelector('.display');
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
        console.log('operator', target.value);
        return;
    }

    if(target.classList.contains('decimal')){
        console.log('decimal', target.value);
        return;
    }

    if(target.classList.contains('all-clear')){
        console.log('clear', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();
    
});

function inputDigit(digit){
    const { displayValue } = calculator; //same as calculator.displayValue
    //change value of 'displayValue' if it's value is zero >>
    //otherwise append to it

    calculator.displayValue = displayValue === '0' ? digit :
    displayValue + digit;
}