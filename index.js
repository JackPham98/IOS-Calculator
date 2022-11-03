//Manipulate all the elements and declare variables for them in this JS file.
const signs = document.querySelectorAll('.operators');
const clear = document.querySelector('.ac');
const np = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const equal = document.querySelector('.equal-sign');
const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.results')

//Initialize all necessary variables for this calculator.
let firstVa = "";
let secondVa = "";
let currentVa = 0;
let sign = "";
let nSign = "-1";

result.innerText = 0;

clear.addEventListener('click', ()=> {
//Set default values:
    firstVa = "";
    secondVa = "";
    currentVa = 0;
    sign = "";
    nSign = "-1";
    result.innerText = 0;
}
)

for(i=1; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        if((typeof firstVa === "string" || typeof firstVa === "number") && sign === ""){
            firstVa = (firstVa + e.target.getAttribute('value'));
            result.innerText = firstVa;
            firstVa = firstVa.toString();
        } else if((typeof firstVa === "string" || typeof firstVa === "number") && sign != ""){
            secondVa = (secondVa + e.target.getAttribute('value'));
            result.innerText = secondVa;
            secondVa = secondVa.toString();
        }
    })
}

percent.addEventListener('click',() => {
    if(sign === "") {
        firstVa = firstVa * "0.01";
        result.innerText = firstVa;
        
    } else if (sign != "") {
        secondVa = secondVa * "0.01";
        result.innerText = secondVa;
    }
})

np.addEventListener('click', () => {
    if(sign === "") {
        firstVa = firstVa * nSign;
        result.innerText = firstVa;
        firstVa = firstVa.toString();
    } else if (sign != "") {
        secondVa = secondVa * nSign;
        result.innerText = secondVa;
        secondVa = secondVa.toString();
    } 
})

function getSign(){
    for(i=0; i < signs.length; i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            if (firstVa != ""){
                firstVa = firstVa.toString();;
            } else if( firstVa === ""){
                firstVa = 0;
                result.innerText = firstVa;
                firstVa = firstVa.toString();
            }
        })
    }
}
getSign();



equal.addEventListener('click', () => {
    result.innerText = "";
    console.log(`first value is ${firstVa}`)
    console.log(`second value is ${secondVa}`)
    firstVa = parseFloat(firstVa);
    secondVa = parseFloat(secondVa);
    console.log(typeof firstVa);
    console.log(typeof secondVa);
    if(sign === "+" && typeof firstVa === "number" && typeof secondVa === "number") {
        currentVa = firstVa + secondVa;
    } else if (sign === "-" && typeof firstVa === "number" && typeof secondVa === "number") {
        currentVa = firstVa - secondVa;
    } else if (sign === "x" && typeof firstVa === "number" && typeof secondVa === "number") {
        currentVa = firstVa * secondVa;
    } else if (sign === "/" && typeof firstVa === "number" && typeof secondVa === "number") {
        currentVa = firstVa / secondVa;
    } 
    firstVa = currentVa;
    firstVa = firstVa.toString();
    result.innerText = firstVa;

//Set deafault values:
    secondVa = "";
    currentVa = 0;
    sign = "";
    nSign = "-1";
})
