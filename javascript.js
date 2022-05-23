const buttons = document.querySelectorAll('button');
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

function removeTransition(e) {
    this.classList.remove('buttonClick');
}

for (let i=0; i<buttons.length;i++) {
    buttons[i].addEventListener('click', ()=> {
        buttons[i].classList.add("buttonClick");
    });
    buttons[i].addEventListener('transitionend', removeTransition);
}



hoverEffect();