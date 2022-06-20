const input = document.getElementById('input')
const button = document.querySelectorAll('.button')
const custom = document.getElementById('custom');
const error = document.getElementById('error')
const numPeople = document.getElementById('numPeople')
const totalVal = document.querySelectorAll('.finalTip')
const reset = document.querySelector('.reset')
let billVal = 0;
let numPeopleVal = 0;

input.addEventListener('input',validateBill);

function validateBill(){
    if(input.value.includes(',')){
        input.value.replace(',','.')
    }
    billVal = parseFloat(input.value);
    calculate()
    console.log(billVal)
}

custom.addEventListener('input',tipCustomVal);
numPeople.addEventListener('input',setnumPeopleVal)
reset.addEventListener('click',handleReset);

button.forEach(button => {
    button.addEventListener('click',handleClick)
});

function handleClick(event){
    button.forEach(button => {
        button.classList.remove('active');
        if(event.target.innerHTML === button.innerHTML){
            button.classList.add('active');
            tipVal = parseFloat(button.innerHTML)/100;
            console.log(tipVal)
        }
    })
    custom.value=''
    calculate()
}

function tipCustomVal(){
    tipVal = parseFloat(custom.value/100);
    button.forEach(button => {button.classList.remove('active');})
    if(custom.value !== 0){
        calculate();
    }
    console.log(tipVal);
}

function setnumPeopleVal(){
    numPeopleVal = parseFloat(numPeople.value)
    if(numPeopleVal <= 0 ) {
        error.innerHTML = "Can't be zero";
    }        
    setTimeout(function(){
        error.innerHTML = ''}, 5000);
        console.log(numPeopleVal);
        calculate();
}

function calculate() {
    if(numPeopleVal >= 1 ) {
        let tip = billVal * tipVal / numPeopleVal;
        let totaltotal = billVal * (tipVal + 1) / numPeopleVal;
        totalVal[0].innerHTML = '$' + tip.toFixed(2);
        totalVal[1].innerHTML = '$' + totaltotal.toFixed(2);
    }
}

function handleReset(){
    input.value = 0.0;
    validateBill();

    button[2].click();
    numPeople.value = 0;
    setnumPeopleVal();
}

