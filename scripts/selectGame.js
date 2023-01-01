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
        window.location.href = 'HumanVsHuman.docs';
    }else if (selectedPlayer === "robot"){
       window.location.href = 'SelectRobotLevel.docs';
    }
    let selected = document.getElementById("level").value;
    if(selected === "Easy"){
        window.location.href = 'humanVsRobotEasy.docs'
    }else if (selected === "Medium"){
        window.location.href = 'humanVsRobotMedium.docs'
    }
}