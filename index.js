const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.results span');
const signs = document.querySelectorAll('operators');
const equal = document.querySelector('equal-sign');
const clear = document.querySelector('clear');
const negative = document.querySelector('negative');
const percent = document.querySelector('percent');






let firstValue = "";
let isFirstValuePresent = false;
let secondValue = "";
let isSecondValuePresent = false;
let sign = "";
let resultValue = 0;

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
}

function getSecondValue(el) {
    if (firstValue != "" && sign != "") {
        secondValue += el;
        result.innerText = secondValue;
        secondValue = +secondValue;
    }
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

equal.addEventListener('click', () => {
    result.innerText = "";
    if(sign === "+") {
        resultValue = firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if(sign === "/") {
        resultValue = firstValue / secondValue;
    } else if(sign === "x") {
        resultValue = firstValue * secondValue;
    }
    result.innerText = resultValue;
})
