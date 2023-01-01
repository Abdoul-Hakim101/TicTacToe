function check(char) {
    let board = new Array(9);
    for (let i = 0; i < 9; i++) {
        board[i] = document.getElementById(String(i)).innerText;
    }
    //horizontal
    for (let i = 0; i <= 6; i += 3) {
        if (board[i] === char && board[1 + i] === char && board[2 + i] === char) {
            document.getElementById('gameState').innerText = char.concat(' Wins');
            setDisableButtons(true);
            return "Game finished";
        }
    }
    //vertical
    for (let i = 0; i < 3; i++) {
        if (board[i] === char && board[3 + i] === char && board[6 + i] === char) {
            document.getElementById('gameState').innerText = char.concat(' Wins');
            setDisableButtons(true);
            return "Game finished";
        }
    }
    //diagonal
    for (let i = 0; i <= 2; i += 2) {
        if (board[i] === char && board[4] === char && board[8 - i] === char) {
            document.getElementById('gameState').innerText = char.concat(' Wins');
            setDisableButtons(true);
            return "Game finished";
        }
    }
    let count = 0;
    for (let i = 0; i < 9; i++) {
        if (!(document.getElementById(String(i)).innerText === "")) {
            count++;
        }
        if (count === 9) {
            document.getElementById('gameState').innerText = "DRAW!";
            return "Game finished";
        }
    }
    return "Game not finished";
}

function setDisableButtons(boolean) {
    for (let i = 0; i < 9; i++) {
        document.getElementById(String(i)).disabled = boolean;
    }
}
function back(){
    window.location.href = 'selectGame.html';
}
function reset() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(String(i)).innerText = "";
        document.getElementById('gameState').innerText = 'Game not started';
        setDisableButtons(false);
        firstPlayer = true;
    }
}