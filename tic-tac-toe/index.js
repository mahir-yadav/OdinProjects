const gameBoard = (function () {
    let board = ['', '', '', '', '', '', '', '', ''];
    function reset() {
        for (let i = 0; i < board.length; i++) board[i] = '';
    }
    function placeSign(index, sign) {
        if (board[index] != '') {
            return false;
        }
        board[index] = sign;
        return true;
    }
    function checkForWin() {
        //0 1 2 
        //3 4 5
        //6 7 8
        for (let i = 0; i < 3; i++) {
            if (board[i] == board[i + 3] && board[i + 3] == board[i + 6] && (board[i] != '')) {
                return true;
            }
        }
        for (let i = 0; i < 9; i += 3) {
            if (board[i] == board[i + 1] && board[i + 1] == board[i + 2] && (board[i] != '')) {
                return true;
            }
        }
        if (board[0] == board[4] && board[4] == board[8] && board[0] != '') return true;
        if (board[2] == board[4] && board[4] == board[6] && board[2] != '') return true;
        return false;
    }
    function isTie() {
        return board.every(cell => cell != '');
    }
    return { board, reset, placeSign, checkForWin, isTie };

})();
function createPlayer(name, sign) {
    return {
        name, sign
    }
}


function playGame(player1name, player2name, player1sign) {
    const player2sign = (player1sign == 'O') ? 'X' : 'O';
    const player1 = createPlayer(player1name, player1sign);
    const player2 = createPlayer(player2name, player2sign);
    const buttons = document.querySelectorAll(".spot");
    const status = document.createElement("div");

    document.body.appendChild(status);
    let curPlayer = player1;
    status.textContent = `${curPlayer.name}'s turn`;

    let gameOver = false;
    function renderBoard() {
        buttons.forEach(button => {
            const index = Number(button.getAttribute('data-index'));
            button.textContent = gameBoard.board[index];
        });
    }
    renderBoard();
    function handleClick(e) {
        if (gameOver) return;
        const ind = Number(e.target.getAttribute("data-index"));
        const placed = gameBoard.placeSign(ind, curPlayer.sign);
        if (!placed) return;
        renderBoard();
        if (gameBoard.checkForWin()) {
            status.textContent = `${curPlayer.name} Wins!`
            gameOver = true; return;
        }
        if (gameBoard.isTie()) {
            status.textContent = `It's a tie!`
            gameOver = true; return;
        }
        if (curPlayer === player1) {
            curPlayer = player2;
        } else {
            curPlayer = player1;
        }
        status.textContent = `${curPlayer.name}'s turn`;


    }
    buttons.forEach(button => {
        button.addEventListener("click", handleClick);
    });
    function restartGame() {
        gameBoard.reset();
        curPlayer = player1;
        gameOver = false;
        renderBoard();
        status.textContent = `${curPlayer.name}'s turn`;
    }
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", restartGame);
    document.body.appendChild(restartButton);


}
document.getElementById("start-btn").addEventListener("click", () => {
    const p1name = document.getElementById("player1-name").value;
    const p2name = document.getElementById("player2-name").value;
    const p1sign = document.getElementById("player1-sign").value;

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-board").style.display = "grid";
    playGame(p1name, p2name, p1sign);
});

