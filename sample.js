const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.results span');
const signs = document.querySelectorAll('.operators');
const equal = document.querySelector('.equal-sign');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstValue = "";
let isFirstValuePresent = false;
let secondValue = "";
let isSecondValuePresent = false;
let sign = "";
let resultValue = 0;

//Basic Functions of a calculator

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isFirstValuePresent === false) {
            getFirstValue(atr);
        }

        if (isSecondValuePresent === false) {
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el) {
    result.innerText = "";
    firstValue += el;
    result.innerText = firstValue;
    firstValue = +firstValue;
    // firstValue = parseIn(firstValue); => change to numbers
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValuePresent = true;
        })
    }
}
getSign();

function getSecondValue(el) {
    if (firstValue != "" && sign != "") {
        secondValue += el;
        result.innerText = secondValue;
        secondValue = +secondValue;
    // secondValue = parseIn(secondValue); => change to numbers        
    }
}



equal.addEventListener('click', () => {
    result.innerText = "";
    if (sign === "+") {
        resultValue = firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if (sign === "/") {
        resultValue = firstValue / secondValue;
    } else if (sign === "x") {
        resultValue = firstValue * secondValue;
    } else {
        resultValue = firstValue;
    }
    result.innerText = resultValue;
    firstValue = resultValue;
    secondValue = "";

    checkResultLength();
})

function checkResultLength(){
    resultValue = JSON.stringify(resultValue);
    if(resultValue.length >= 8){
        resultValue = JSON.parse(resultValue);
        result.innerText = resultValue.tofixed(5);
    }
}

negative.addEventListener('click', () => {
    if(firstValue != ""){ 
        resultValue = -firstValue;
        firstValue = resultValue;
    } else if(firstValue != "" && secondValue != "" && sign != "") {
        resultValue = -resultValue;
    }
    result.innerText = resultValue;

})

percent.addEventListener('click', () => {
    if(firstValue != ""){
        firstValue = firstValue/100;
        resultValue = firstValue;
    } else if(firstValue != "" && secondValue != "" && sign !=""){
        resultValue = resultValue/100;
    }
    result.innerText = resultValue;


})

clear.addEventListener('click', () => {
    result.innerHTML = 0;
    firstValue = "";
    sign = "";
    secondValue = "";
    isFirstValuePresent = false;
    isSecondValuePresent = false;
    resultValue = 0;
})




