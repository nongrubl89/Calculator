//calculator object 
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

//changes number on click of number button and appends number to single digit
function changeNumber(num){
 let displayValue = calculator.displayValue;
 let waitingForSecondOperand = calculator.waitingForSecondOperand
 if(waitingForSecondOperand===true){
   calculator.waitingForSecondOperand=false;
 } 
  calculator.displayValue = displayValue === '0' ? num : displayValue+num;
 }

//clears screen and resets calculator object
function clearScreen(){
  calculator.displayValue='0';
  calculator.firstOperand=null;
  calculator.waitingForSecondOperand=true;
  calculator.operator=null;
  
}

function addDecimal(dot){
  if(calculator.displayValue.includes('.'))return;
  calculator.displayValue+=dot;
}
//changes the display in the input box
function updateDisplay() {
  let input = document.getElementById("inputSpace");
  input.innerHTML = calculator.displayValue;
  }
  console.log(calculator);

//chooses what to do based on operator button clicked
  function assignOperator(operator){
    let firstOperand = calculator.firstOperand;
    let displayValue = calculator.displayValue;
    const input = parseFloat(displayValue);
    if(firstOperand===null){
      calculator.firstOperand=input;
      calculator.waitingForSecondOperand=true;
      calculator.operator=operator;
    } if(operator){
      calculator.displayValue='';
      calculator.firstOperand=displayValue;
      calculator.operator=operator;
    }
    console.log(calculator);
  }

//executes operation
function operate(){
  let firstOperand = calculator.firstOperand;
  let secondOperand = calculator.displayValue;
  switch(calculator.operator){
    case "+" : calculator.displayValue = parseFloat(firstOperand) +parseFloat(secondOperand);
    break;
    case "-":calculator.displayValue = firstOperand-secondOperand;
    break;
    case "/":calculator.displayValue = firstOperand/secondOperand;
    break;
    case "*":calculator.displayValue = firstOperand*secondOperand;
    break;
  }
 
}
updateDisplay();
const equals = document.getElementById('equals');
let input = document.getElementById("inputSpace");
const numberButtons = document.querySelectorAll('.buttons');
const clearAll = document.getElementById('clear');
const decimal = document.getElementById('dot');
const operatorButtons = document.querySelectorAll('.operator');

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', (event) => {
    const target = event.target
    changeNumber(target.innerText);
    updateDisplay();
})});

clearAll.addEventListener('click',()=>{
  clearScreen()
  updateDisplay();
});

decimal.addEventListener('click',(event)=>{
  const target = event.target;
  addDecimal(target.innerText);
  updateDisplay();
})

operatorButtons.forEach((operatorButton)=>{
  operatorButton.addEventListener('click',(event)=>{
    const target = event.target;
    assignOperator(target.innerText);
    updateDisplay();
  })
})

equals.addEventListener('click',()=>{
  operate();
  updateDisplay();
});
