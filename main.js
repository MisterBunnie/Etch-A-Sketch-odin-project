document.addEventListener("DOMContentLoaded",function(){
    createBoard(12);

})

function createBoard(size){
    let board = document.querySelector('.board');
    
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numberDivs = size*size;

    for(let i = 0 ; i<numberDivs; i++){
        let div  = document.createElement('div');
        div.style.backgroundColor = 'purple';
        board.insertAdjacentElement('beforeend',div);
        
    }
}