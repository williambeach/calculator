const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const back = document.querySelector('#backspace');
const clear = document.querySelector('#allclear');
const decimal = document.querySelector('#decimal');
const operations = document.querySelectorAll('.operation');
let firstNum = "";
let secondNum = "";



function plusminus(num) {
    return (num) * -1.0;
}

function percentage(num) {
    return ((num) / 100).toFixed(4);
}

function squareroot(num) {
    return ((num) ** (1/2)).toFixed(4);
}


function removeClickEffect(e) {
    this.classList.remove('clickEffect');
}

function hoverEffect() {
    for (let i=0; i<buttons.length;i++) {
        buttons[i].addEventListener('mouseover', () => {
            buttons[i].classList.add("hoverButton");
        buttons[i].addEventListener('mouseout', () => {
            buttons[i].classList.remove("hoverButton");
        });
        });
    }
}

function clickEffect() {
    for (let i=0; i<buttons.length;i++) {
        buttons[i].addEventListener('click', ()=> {
            buttons[i].classList.add("clickEffect");
        });
        buttons[i].addEventListener('transitionend', removeClickEffect);
    }
}

function displayNumbers() {
    for (let i=0;i<numbers.length;i++) {
        numbers[i].addEventListener('click', ()=> {
            if (display.textContent.length < 16) {
                display.textContent += numbers[i].value;
            }
        });
    }
}

function backSpace() {
    back.addEventListener('click', ()=> {
        firstNum = String(firstNum);
        display.textContent = display.textContent.slice(0,-1);
        firstNum = firstNum.slice(0,-1);
    });
}

function allClear() {
    clear.addEventListener('click', ()=> {
        display.textContent = "";
        firstNum = "";
    });
}

function getFirstNumber() {
    for (let i=0; i<numbers.length;i++) {
        numbers[i].addEventListener('click', ()=> {
            if (firstNum.length < 16) {
                firstNum += numbers[i].value;
                
            }
            console.log(firstNum);
        });
    }
}

function addDecimal() {
    decimal.addEventListener('click', ()=> {
        if (!firstNum.includes('.')) {
            display.textContent += decimal.value;
            firstNum += decimal.value;
        }
    });
}

function getOperation() {
    isNumber =0;
    for (let i=0;i<operations.length;i++) {
        operations[i].addEventListener('click', ()=> {
            if (firstNum !== "") {
                firstNum = Number(firstNum);
                if (operations[i].value == "plusminus") {
                    firstNum = plusminus(firstNum);
                    firstNum = String(firstNum);
                    display.textContent = firstNum;
                } else if (operations[i].value == "percentage") {
                    firstNum = percentage(firstNum);
                    firstNum = String(firstNum);
                    display.textContent = firstNum;
                } else if (operations[i].value == "squareroot") {
                    isNumber = squareroot(firstNum);
                    if (isNaN(isNumber) == true) {
                        firstNum = String(firstNum);
                    } else {
                        firstNum = String(isNumber);
                        display.textContent = firstNum;
                    }
                }
            }
            display.textContent = firstNum;
        });
    }
}






















getOperation();
addDecimal();
displayNumbers();
allClear();
backSpace();
hoverEffect();
clickEffect();
getFirstNumber();