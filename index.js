//Manipulate all the elements and declare variables for them in this JS file.
const signs = document.querySelectorAll('.operators');
const clear = document.querySelector('.ac');
const np = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const equal = document.querySelector('.equal-sign');
const comma = document.querySelector('.comma');
const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.results')

//Initialize all necessary variables for this calculator.
let firstVa = 0;
let secondVa = "";
let currentVa = 0;
let sign = "";
let nSign = "+1";
let percentPresent = "1";

result.innerText = firstVa;

for(i=1; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        if(firstVa === 0 && sign === ""){
            firstVa = "";
            firstVa = (firstVa + e.target.getAttribute('value')) * nSign * percentPresent;
            // currentVa = firstVa;
            result.innerText = firstVa;
        } else if(typeof firstVa === String || typeof firstVa === Number && sign != ""){
            // secondVa = "";
            secondVa = (secondVa + e.target.getAttribute('value')) * nSign * percentPresent;
            // currentVa = secondVa;
            result.innerText = secondVa;
        }
    })
}

function getSign(){
    for(i=0; i < signs.length; i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
        })
    }
}
getSign;



equal.addEventListener('click', () => {
    result.innerText = "";
    firstVa = parseInt(firstVa);
    secondVa = parseInt(secondVa);
    console.log(`firstis ${firstVa}`)
    console.log(typeof firstVa)  
    console.log(`secondis ${secondVa}`)
    console.log(typeof firstVa)  
    console.log(sign);
    console.log(typeof sign);
    // calculateResult(firstVa,secondVa);
    if(sign === "+") {
        currentVa = firstVa + secondVa;
    } else if (sign === "-") {
        currentVa = firstVa - secondVa;
    } else if (sign === "x") {
        currentVa = firstVa * secondVa;
    } else if (sign === "/") {
        currentVa = firstVa / secondVa;
    }


    console.log(`result ${currentVa}`)
    firstVa = currentVa;
    result.innerText = firstVa;
})
