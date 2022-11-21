//Manipulate all the elements and declare variables for them in this JS file.
const signs = document.querySelectorAll('.operators');
const change = Array.from(signs);
const clear = document.querySelector('.ac');
const np = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const equal = document.querySelector('.equal-sign');
const numbers = Array.from(document.querySelectorAll('.numbers'));
const result = document.querySelector('.results')

//Initialize all necessary variables for this calculator.
let firstVa = "";
let secondVa = "";
let currentVa = 0;
let sign = "";
// let nSign = "-1";
result.innerText = 0;

//Clear function:
//Set default values:
clear.addEventListener('click', () => {
    firstVa = "";
    secondVa = "";
    currentVa = 0;
    sign = "";
    // nSign = "-1";
    result.innerText = 0;
}
)

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        signs.forEach(sign => {
            sign.style.backgroundColor = "#FF9F0A";
            sign.style.color = "#FFF";
        })
        if(firstVa[0] === '.'){
            firstVa = '0'+ firstVa;
        } 
        if(secondVa[0] === '.'){
            secondVa = '0'+ secondVa; 
        }



        if ((typeof firstVa === "string" || typeof firstVa === "number") && sign === "") {
            if(firstVa.includes('.') && e.target.value === '.'){
                firstVa = firstVa;
                result.innerText = firstVa;
                firstVa = firstVa.toString();
            } else {
                firstVa = (firstVa + e.target.getAttribute('value'));
                result.innerText = firstVa;
                firstVa = firstVa.toString();
            }

        } else if ((typeof firstVa === "string" || typeof firstVa === "number") && sign != "") {
            if(secondVa.includes('.') && e.target.value === '.'){
                secondVa = secondVa;
                result.innerText = secondVa;
                secondVa = secondVa.toString();
            } else {
                secondVa = (secondVa + e.target.getAttribute('value'));
                result.innerText = secondVa;
                secondVa = secondVa.toString();
            }
        }
    })
}

// function clickNumber(e) {
//     signs.forEach(sign => {
//         sign.style.backgroundColor = "#FF9F0A";
//         sign.style.color = "#FFF";
//     })
//     if ((typeof firstVa === "string" || typeof firstVa === "number") && sign === "") {
//         firstVa = (firstVa + e.getAttribute('value'));
//         result.innerText = firstVa;
//         firstVa = firstVa.toString();
//     } else if ((typeof firstVa === "string" || typeof firstVa === "number") && sign != "") {
//         secondVa = (secondVa + e.getAttribute('value'));
//         result.innerText = secondVa;
//         secondVa = secondVa.toString();
//     }
// }

percent.addEventListener('click', () => {
    if (sign === "") {
        firstVa = parseFloat(firstVa);
        firstVa = firstVa/100;
        result.innerText = firstVa;
        firstVa = firstVa.toString();

    } else if (sign != "") {
        secondVa = parseFloat(secondVa);
        secondVa = secondVa/100;
        result.innerText = secondVa;
        secondVa = secondVa.toString();
    }
})

np.addEventListener('click', () => {
    if (sign === "") {
        firstVa = parseFloat(firstVa);
        firstVa = firstVa * (-1);
        result.innerText = firstVa;
        firstVa = firstVa.toString();
    } else if (sign != "") {
        secondVa = parseFloat(secondVa);
        secondVa = secondVa * (-1);
        result.innerText = secondVa;
        secondVa = secondVa.toString();
    }
})

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', () => {
            signs[i].style.backgroundColor = "#FFF";
            signs[i].style.color = "#FF9F0A";
            sign = signs[i].getAttribute('value');
            if (firstVa != "") {
                firstVa = firstVa.toString();;
            } else if (firstVa === "") {
                firstVa = 0;
                result.innerText = firstVa;
                firstVa = firstVa.toString();
            }

        }
        )
    }
}
getSign();





equal.addEventListener('click', () => {
    result.innerText = "";
    console.log(`first value is ${firstVa}`)
    console.log(`second value is ${secondVa}`)
    firstVa = parseFloat(firstVa);
    secondVa = parseFloat(secondVa);
    if (sign === "/" && typeof firstVa === "number"  && typeof secondVa === 0) {
        currentVa = "Error";
    } else if (sign === "+" && typeof firstVa === "number" && typeof secondVa === "number") {
        currentVa = firstVa + secondVa;
    } else if (sign === "-" && typeof firstVa === "number" && typeof secondVa === "number") {
        currentVa = firstVa - secondVa;
    } else if (sign === "x" && typeof firstVa === "number" && typeof secondVa === "number") {
        currentVa = firstVa * secondVa;
    } else if (sign === "/" && typeof firstVa === "number" && typeof secondVa === "number") {
        currentVa = firstVa / secondVa;
    } else if (firstVa && !sign || !secondVa) {
        currentVa = firstVa;
    } 
    // else if (firstVa && sign != '' && secondVa === ''){
    //     secondVa = 0;
    //     currentVa = firstVa + secondVa;
    //     console.log(firstVa);
    //     console.log(secondVa);
    //     console.log(currentVa)
    // }
    firstVa = currentVa;
    firstVa = firstVa.toString();
    result.innerText = firstVa;

    //Set deafault values:
    secondVa = "";
    currentVa = 0;
    sign = "";
    // nSign = "-1";
})


//for loop => i = 0 
//Try not to use arithmetic operations w/ floating numbers
//click . many times => still 1.3, 1.4, 1.5