let click = false;
document.addEventListener("DOMContentLoaded", function () {
    createBoard(16);

    document.querySelector('body').addEventListener('click', (e) => {
        if (e.target.tagName != "BUTTON") {
            click != !click;
            let draw = document.querySelector('#draw');
            if (click) {
                draw.innerHTML = "You Are Allowed To Draw";
            }
            else {
                draw.innerHTML = "You Are Now Allowed To Draw";
            }
        }
    })

    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener('click', () => {
        let size = getSize();
        createBoard(size);
    });
})

function createBoard(size) {
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numberDivs = size * size;

    for (let i = 0; i < numberDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv());
        board.insertAdjacentElement('beforeend', div);

    }
}

function getSize() {
    let choice = prompt("Choose size of the board:")
    let message = document.querySelector('#message');
    if (choice == "") {
        message.innerHTML = "Please provide a number:"
    } else if (choice < 1 || choice > 99) {
        message.innerHTML = "Provide a number between 1 and 100";
    } else {
        message.innerHTML = "Play!"
        return choice;
    }
}
let color = 'black';
function colorDiv() {
    if (click) {
        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360},100% 50%)`;
        }
        else {
            this.style.backgroundColor = 'black';
        }
    }

}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.background = 'white')
}