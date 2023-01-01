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
    } else {
        if (value === "") {
            document.getElementById(String(i)).innerText = "O";
            if (check("O") === "Game not finished") {
                firstPlayer = true;
                document.getElementById('gameState').innerText = 'X Turn';
            }

        }
    }
}

