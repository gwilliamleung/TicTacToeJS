let board = Array.from(document.getElementsByClassName('cell'));
let turn = "X";
let boardArr = [];
let gameStatus = false;
const turnMessage = document.getElementById("turn");
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


function gameSP(){
    reset();
    gameStatus = true;
        turnMessage.innerHTML = "X starts, please click on a square below";
        board.map( cells => {
            cells.addEventListener('click', (e) => {
                switch(turn){
                    case "X":
                        if (gameStatus === true) {
                            if (e.target.innerHTML == ""){
                                document.getElementById(e.target.id).innerHTML = "X";
                                for (var i=0; i<board.length; i++){
                                    boardArr.push(board[i].innerHTML);
                                }
                                turnMessage.innerHTML = "O's turn, please click on a free square below";
                                winCon(turn);
                                turn = "O";
                                boardArr = [];
                                break;
                            }
                        }
                    case "O":
                        if (gameStatus === true){
                            if (e.target.innerHTML == ""){
                                document.getElementById(e.target.id).innerHTML = "O";
                                for (var i=0; i<board.length; i++){
                                    boardArr.push(board[i].innerHTML);
                                }
                                turnMessage.innerHTML = "X's turn, please click on a free square below";
                                winCon(turn);
                                turn = "X";
                                boardArr = [];
                                break;
                            }
                        }
                }       
            });
        }
    );
}

function gameBot(){
    reset();
    gameStatus = true;
        turnMessage.innerHTML = "X starts, please click on a square below";
        board.map( cells => {
            cells.addEventListener('click', (e) => {
                switch(turn){
                    case "X":
                        if (gameStatus === true) {
                            if (e.target.innerHTML == ""){
                                document.getElementById(e.target.id).innerHTML = "X";
                                for (var i=0; i<board.length; i++){
                                    boardArr.push(board[i].innerHTML);
                                }
                                turnMessage.innerHTML = "O's turn, please click on a free square below";
                                winCon(turn);
                                turn = "O";
                                boardArr = [];
                                break;
                            }
                        }
                    case "O":
                        if (gameStatus === true){
                            let botMove = Math.floor(Math.random() * board.length);
                                if (board[botMove].innerHTML == ""){
                                    document.getElementById(board[botMove].id).innerHTML = "O";
                                    for (var i=0; i<board.length; i++){
                                        boardArr.push(board[i].innerHTML);
                                    }
                                    turnMessage.innerHTML = "X's turn, please click on a free square below";
                                    winCon(turn);
                                    turn = "X";
                                    boardArr = [];
                                    ii = 9;
                                    }
                            botMove = Math.floor(Math.random() * board.length);

                        }
                }       
            });
        }
    );
}

function reset(){
    board.map( cells => {
        cells.innerHTML = "";
        });
    turn = "X";
    turnMessage.innerHTML = "X starts, please click on a square below";
    boardArr = [];
    gameStatus = false;
}


function winCon(turn){
    for (let i = 0; i <= 7; i++) {
        const winCondition = winArray[i];
        const a = boardArr[winCondition[0]];
        const b = boardArr[winCondition[1]];
        const c = boardArr[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            turnMessage.innerHTML = `${turn} wins!`;
            gameStatus = false;
            break;
        }
        if (!boardArr.includes('')) {
            turnMessage.innerHTML = "It is a draw!";
            gameStatus = false;
        }
    }
    
}
