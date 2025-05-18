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
                return [i, i + 3, i + 6];
            }
        }
        for (let i = 0; i < 9; i += 3) {
            if (board[i] == board[i + 1] && board[i + 1] == board[i + 2] && (board[i] != '')) {
                return [i, i + 1, i + 2];
            }
        }
        if (board[0] == board[4] && board[4] == board[8] && board[0] != '') return [0, 4, 8];
        if (board[2] == board[4] && board[4] == board[6] && board[2] != '') return [2, 4, 6];
        return null;
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
    status.setAttribute("class", "status");
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
        const winning = gameBoard.checkForWin();
        if (winning) {
            status.textContent = `${curPlayer.name} Wins!`
            gameOver = true;
            winning.forEach(ele => {
                const cell = document.querySelector(`.spot[data-index="${ele}"]`);
                cell.classList.add("win");
                cell.classList.add("blink");
            });
            document.querySelector(".restart-btn").classList.add("blink");
            return;
        }
        if (gameBoard.isTie()) {
            status.textContent = `It's a tie!`
            gameOver = true;
            document.querySelector(".restart-btn").classList.add("blink");

            return;
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
        document.querySelectorAll(".spot").forEach(cell => {
            cell.classList.remove("win");
            cell.classList.remove("blink");


        });
        document.querySelector(".restart-btn").classList.remove("blink");


    }
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", restartGame);
    restartButton.setAttribute("class", "restart-btn");
    document.body.appendChild(restartButton);
    const HomeButton = document.createElement("button");
    HomeButton.textContent = "Home";
    HomeButton.addEventListener("click", () => {
        document.getElementById("start-screen").style.display = "flex";
        document.getElementById("game-board").style.display = "none";
        document.getElementsByClassName("restart-btn")[0].style.display = "none";
        document.getElementsByClassName("home-btn")[0].style.display = "none";
        document.getElementsByClassName("status")[0].style.display = "none";

        document.getElementById("player1-name").value = "";
        document.getElementById("player2-name").value = "";

        const radioButtons = document.querySelectorAll('input[name="player1-sign"]');
        radioButtons.forEach(radio => radio.checked = false);
    });
    HomeButton.setAttribute("class", "home-btn");
    document.body.appendChild(HomeButton);

}
document.getElementById("start-btn").addEventListener("click", () => {
    const p1name = document.getElementById("player1-name").value;
    const p2name = document.getElementById("player2-name").value;
    const p1sign = document.querySelector('input[name="player1-sign"]:checked').value;
    if (!p1sign) {
        alert("Please choose a sign for Player 1.");
        return;
    }
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-board").style.display = "grid";
    playGame(p1name, p2name, p1sign);

    document.getElementsByClassName("restart-btn")[0].style.display = "";
    document.getElementsByClassName("home-btn")[0].style.display = "";
    document.getElementsByClassName("status")[0].style.display = "flex";

});

