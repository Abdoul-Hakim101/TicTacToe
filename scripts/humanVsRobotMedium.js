let firstPlayer = true;

function game(i) {
    let value = document.getElementById(String(i)).innerText;
    if (firstPlayer) {
        if (value === "") {
            document.getElementById(String(i)).innerText = "X";
            if (check("X") === "Game not finished") {
                firstPlayer = false;
                document.getElementById('gameState').innerText = 'O Turn';
            }

        }
    }
    if (!firstPlayer) {
        computerTurn();
    }
}

function computerTurn() {
    let AIMove = makeMove("O");
    let blockOpponent = makeMove("X");
    if (AIMove !== -1) {
        document.getElementById(String(AIMove)).innerText = "O"
        if (check("O") === "Game not finished") {
            firstPlayer = true;
            document.getElementById('gameState').innerText = 'X Turn';
        }
    } else if (blockOpponent !== -1) {
        document.getElementById(String(blockOpponent)).innerText = "O"
        if (check("O") === "Game not finished") {
            firstPlayer = true;
            document.getElementById('gameState').innerText = 'X Turn';
        }
    } else {
        makeRandomMove();
    }
}

function makeRandomMove() {
    while (true) {
        let index = getRandomInteger(9);
        if (document.getElementById(String(index)).innerText === "") {
            document.getElementById(String(index)).innerText = "O";
            if (check("O") === "Game not finished") {
                firstPlayer = true;
                document.getElementById('gameState').innerText = 'X Turn';
            }
            break;
        }
    }
}

function getRandomInteger(value) {
    return Math.floor(Math.random() * value);
}

function makeMove(char) {
    let board = new Array(9);
    for (let i = 0; i < 9; i++) {
        board[i] = document.getElementById(String(i)).innerText;
    }
    // Check if AI has two in a row and can win with one further move
    for (let i = 0; i <= 6; i += 3) {
        if (board[i] === char && board[1 + i] === char && board[2 + i] === "") {
            return 2 + i;
        }
        if (board[i] === char && board[1 + i] === "" && board[2 + i] === char) {
            return 1 + i;
        }
        if (board[i] === "" && board[1 + i] === char && board[2 + i] === char) {
            return i;
        }
    }
    // Check if AI has two in a col and can win with one further move
    for (let i = 0; i < 3; i++) {
        if (board[i] === char && board[3 + i] === char && board[6 + i] === "") {
            return 6 + i;
        }
        if (board[i] === char && board[3 + i] === "" && board[6 + i] === char) {
            return 3 + i;
        }
        if (board[i] === "" && board[3 + i] === char && board[6 + i] === char) {
            return i;
        }
    }
    // Check if AI has two in a diagonal and can win with one further move
    for (let i = 0; i <= 2; i += 2) {
        if (board[i] === char && board[4] === char && board[8 - i] === "") {
            return 8 - i;
        }
        if (board[i] === char && board[4] === "" && board[8 - i] === char) {
            return 4;
        }
        if (board[i] === "" && board[4] === char && board[8 - i] === char) {
            return i;
        }
    }
    return -1;

}
