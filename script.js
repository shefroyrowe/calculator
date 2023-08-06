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
  //operations object
/*---------------------*/
const updateDispaly = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
};

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

/*----------------------------------------------*/
  //show equation expression in secondary display
/*----------------------------------------------*/
function evaluateEquation(){
    const keys = document.getElementsByTagName('button');
    const secondaryDisplay = document.querySelector('.secondary-display');

     Array.from(keys).forEach(key => {
        key.addEventListener('click', (e)=>{
            let value = e.target.value;

            if(value !== 'del' && value !== '='){
                updateDispaly.firstNumber = updateDispaly.firstNumber += value;
                secondaryDisplay.textContent = updateDispaly.firstNumber;
            }
            
        });
    });
}

evaluateEquation();
