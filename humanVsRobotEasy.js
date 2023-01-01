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
    makeRandomMove();
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