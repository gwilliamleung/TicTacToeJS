let board = Array.from(document.getElementsByClassName('cell'));
let turn = "X";

function game(){
    board.map( cells => {
        cells.addEventListener('click', (e) => {
            switch(turn){
                case "X":
                    if (e.target.innerHTML == ""){
                        document.getElementById(e.target.id).innerHTML = "X";
                        winCon(turn);
                        turn = "O";
                        break;
                    }
                case "O":
                    if (e.target.innerHTML == ""){
                        document.getElementById(e.target.id).innerHTML = "O";
                        winCon(turn);
                        turn = "X";
                        break;
                    }
            }       
            });
        });
}

function reset(){
    board.map( cells => {
        cells.innerHTML = "";
        });
    turn = "X";
}

function winCon(){
}