let board = Array.from(document.getElementsByClassName('cell'));
let turn = "X";
let boardArr = [];
const winArray = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

function game(){
    board.map( cells => {
        cells.addEventListener('click', (e) => {
            switch(turn){
                case "X":
                    if (e.target.innerHTML == ""){
                        document.getElementById(e.target.id).innerHTML = "X";
                        for (var i=0; i<board.length; i++){
                            boardArr.push(board[i].innerHTML);
                        }
                        winCon(turn);
                        turn = "O";
                        console.log(boardArr)
                        boardArr = [];
                        break;
                    }
                case "O":
                    if (e.target.innerHTML == ""){
                        document.getElementById(e.target.id).innerHTML = "O";
                        for (var i=0; i<board.length; i++){
                            boardArr.push(board[i].innerHTML);
                        }
                        winCon(turn);
                        turn = "X";
                        console.log(boardArr)
                        boardArr = [];
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



function winCon(turn){

}

