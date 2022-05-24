const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const back = document.querySelector('#backspace');
const clear = document.querySelector('#allclear');
const decimal = document.querySelector('#decimal');
let firstNum = "";
let secondNum = "";


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
























addDecimal();
displayNumbers();
allClear();
backSpace();
hoverEffect();
clickEffect();
getFirstNumber();