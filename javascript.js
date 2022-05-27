const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const back = document.querySelector('#backspace');
const clear = document.querySelector('#allclear');
const decimal = document.querySelector('#decimal');
const operations = document.querySelectorAll('.operation');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
let firstNum = "";
let operator = "";
let secondNum = "";
const numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
let indexOfDecimal ;


function plusminus(num) {
    return (num) * -1.0;
}

function percentage(num) {
    return ((num) / 100).toFixed(4);
}

function squareroot(num) {
    return ((num) ** (1/2)).toFixed(4);
}

function add(num1,num2) {
    return (num1 + num2).toFixed(4);
}

function subtract(num1, num2) {
    return (num1 - num2).toFixed(4);
}

function multiply(num1, num2) {
    return (num1 * num2).toFixed(4);
}

function divide(num1, num2) {
    if (num2 == 0) {
        return 'nah fam'
    } else {
        return (num1 / num2).toFixed(4);
    }
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
        operator = "";
        secondNum = "";
    });
}

function getNumber() {
    for (let i=0; i<numbers.length;i++) {
        numbers[i].addEventListener('click', ()=> {
            if (firstNum.length < 16 && operator == "") {
                firstNum += numbers[i].value;
                display.textContent = firstNum;
            } else if (firstNum !== "" && operator!== "" && secondNum
            .length < 16) {
                secondNum += numbers[i].value;
                display.textContent = secondNum;
            }
        });
    }
    window.addEventListener('keydown', (KeyboardEvent)=> {
        if (numbersArray.includes(KeyboardEvent.key)) {
            if (firstNum.length < 16 && operator == "") {
                firstNum += KeyboardEvent.key;
                display.textContent = firstNum;
            } else if (firstNum!== "" && operator !== "" && secondNum.length < 16) {
                secondNum += KeyboardEvent.key;
                display.textContent = secondNum;
            }
        }
    });
}

function addDecimal() {
    decimal.addEventListener('click', ()=> {
        if (firstNum !== "" && secondNum == "") {
            if (!firstNum.includes('.')) {
                display.textContent += decimal.value;
                firstNum += decimal.value;
            }
        }
        if (firstNum !== "" && secondNum !== "" && operate !== "") {
            if (!secondNum.includes('.')) {
                display.textContent += decimal.value;
                secondNum += decimal.value;
            }
        }
    });
}

function getOperation() {
    isNumber = 0;
    for (let i=0;i<operations.length;i++) {
        operations[i].addEventListener('click', ()=> {
            if (firstNum !== "" && secondNum == "") {
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
                        display.textContent = firstNum;
                    } else {
                        firstNum = String(isNumber);
                        display.textContent = firstNum;
                    } 
                }
            }
            if (firstNum !== "" && secondNum !== "") {
                secondNum = Number(secondNum);
                if (operations[i].value == "plusminus") {
                    secondNum = plusminus(secondNum);
                    secondNum = String(secondNum);
                    display.textContent = secondNum;
                } else if (operations[i].value == "percentage") {
                    secondNum = percentage(secondNum);
                    secondNum = String(secondNum);
                    display.textContent = secondNum;
                } else if (operations[i].value == "squareroot") {
                    isNumber = squareroot(secondNum);
                    if (isNaN(isNumber) == true) {
                        secondNum = String(secondNum);
                        display.textContent = secondNum;
                    } else {
                        secondNum = String(isNumber);
                        display.textContent = secondNum;
                    } 
                }
            }
        });
    }
}

function getOperator() {
    for (let i=0;i<operators.length;i++) {
        operators[i].addEventListener('click', ()=> {
            if (firstNum !== "" && operator == "") {
                operator = operators[i].value;
            }
        });
    }
}


function operate() {
    for (let i=0;i<operators.length;i++) {
        operators[i].addEventListener('click', ()=> {
            if (firstNum !== "" && secondNum !== "" && operator == "/") {
                firstNum = Number(firstNum);
                secondNum = Number(secondNum);
                firstNum = divide(firstNum, secondNum)
                secondNum = "";
                operator = operators[i].value;
                firstNum = String(firstNum);
                if (firstNum.length > 16) {
                    firstNum = Number(firstNum);
                    firstNum = firstNum.toPrecision(4);
                }
                display.textContent = firstNum;
            }
            if (firstNum !== "" && secondNum !== "" && operator == "*") {
                firstNum = Number(firstNum);
                secondNum = Number(secondNum);
                firstNum = multiply(firstNum, secondNum)
                secondNum = "";
                operator = operators[i].value;
                firstNum = String(firstNum);
                if (firstNum.length > 16) {
                    firstNum = Number(firstNum);
                    firstNum = firstNum.toPrecision(4);
                }
                display.textContent = firstNum;
            }
            if (firstNum !== "" && secondNum !== "" && operator == "-") {
                firstNum = Number(firstNum);
                secondNum = Number(secondNum);
                firstNum = subtract(firstNum, secondNum)
                secondNum = "";
                operator = operators[i].value;
                firstNum = String(firstNum);
                if (firstNum.length > 16) {
                    firstNum = Number(firstNum);
                    firstNum = firstNum.toPrecision(4);
                }
                display.textContent = firstNum;
            }
            if (firstNum !== "" && secondNum !== "" && operator == "+") {
                firstNum = Number(firstNum);
                secondNum = Number(secondNum);
                firstNum = add(firstNum, secondNum)
                secondNum = "";
                operator = operators[i].value;
                firstNum = String(firstNum);
                if (firstNum.length > 16) {
                    firstNum = Number(firstNum);
                    firstNum = firstNum.toPrecision(4);
                }
                display.textContent = firstNum;
            }
        });
    }
}



function calculate() {
    equals.addEventListener('click', ()=> {
        if (firstNum !== "" && secondNum !== "" && operator !== "") {
            if (operator == "/") {
                firstNum = Number(firstNum);
                secondNum = Number(secondNum);
                firstNum = divide(firstNum, secondNum)
                secondNum = "";
                firstNum = String(firstNum);
                if (firstNum.length > 16) {
                    firstNum = Number(firstNum);
                    firstNum = firstNum.toPrecision(4);
                }
                display.textContent = firstNum;
            } 
            if (operator == "*") {
                firstNum = Number(firstNum);
                secondNum = Number(secondNum);
                firstNum = multiply(firstNum, secondNum)
                secondNum = "";
                firstNum = String(firstNum);
                if (firstNum.length > 16) {
                    firstNum = Number(firstNum);
                    firstNum = firstNum.toPrecision(4);
                }
                display.textContent = firstNum;
            }
            if (operator == "-") {
                firstNum = Number(firstNum);
                secondNum = Number(secondNum);
                firstNum = subtract(firstNum, secondNum)
                secondNum = "";
                firstNum = String(firstNum);
                if (firstNum.length > 16) {
                    firstNum = Number(firstNum);
                    firstNum = firstNum.toPrecision(4);
                }
                display.textContent = firstNum;
            }
            if (operator == "+") {
                firstNum = Number(firstNum);
                secondNum = Number(secondNum);
                firstNum = add(firstNum, secondNum)
                secondNum = "";
                firstNum = String(firstNum);
                if (firstNum.length > 16) {
                    firstNum = Number(firstNum);
                    firstNum = firstNum.toPrecision(4);
                }
                display.textContent = firstNum;
            }
        }
        for (let i=0;i<operators.length;i++) {
            operators[i].addEventListener('click', ()=> {
                operator = operators[i].value;
            });
        }
    });
}












calculate();
getOperator();
getOperation();
addDecimal();
allClear();
backSpace();
hoverEffect();
clickEffect();
getNumber();
operate();