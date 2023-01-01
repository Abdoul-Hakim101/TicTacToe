let selectedPlayer;

function selected() {
    let selected = document.getElementById("players").value;
    selectedPlayer = selected;
    if (selected === "friend") {
        document.getElementById('button').innerText = "Start";
    } else {
        document.getElementById('button').innerText = "Next";
    }
}

function button() {
    if (selectedPlayer === "friend") {
        window.location.href = 'HumanVsHuman.html';
    }else if (selectedPlayer === "robot"){
       window.location.href = 'SelectRobotLevel.html';
    }
    let selected = document.getElementById("level").value;
    if(selected === "Easy"){
        window.location.href = 'humanVsRobotEasy.html'
    }else if (selected === "Medium"){
        window.location.href = 'humanVsRobotMedium.html'
    }
}