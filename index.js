let diceRolls = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
let diceLable = document.querySelector(".dice-lable");
let resultTags = document.querySelectorAll(".result");
let root = document.documentElement;


function steGridSize(diceNo, points) {
    // root.style.setProperty(`--grid${diceNo}-size-x`, "3");
    // root.style.setProperty(`--grid${diceNo}-size-y`, "3");
    switch (points) {
        case 1:
            root.style.setProperty(`--grid${diceNo}-size-x`, "1");
            root.style.setProperty(`--grid${diceNo}-size-y`, "1");
            break;
        case 2:
            document.querySelector(`.d${diceNo} .dice-points-container div:last-child`).style.gridColumn = 3;
            document.querySelector(`.d${diceNo} .dice-points-container div:last-child`).style.gridRow = 3;
            break;
        case 3:
            document.querySelector(`.d${diceNo} .dice-points-container div:nth-child(2)`).style.gridColumn = 2;
            document.querySelector(`.d${diceNo} .dice-points-container div:nth-child(2)`).style.gridRow = 2;
            document.querySelector(`.d${diceNo} .dice-points-container div:last-child`).style.gridColumn = 3;
            document.querySelector(`.d${diceNo} .dice-points-container div:last-child`).style.gridRow = 3;
            break;
        case 4:
            root.style.setProperty(`--grid${diceNo}-size-x`, "2");
            root.style.setProperty(`--grid${diceNo}-size-y`, "2");
            break;
        case 5:
            document.querySelector(`.d${diceNo} .dice-points-container div:nth-child(2)`).style.gridColumn = 3;
            document.querySelector(`.d${diceNo} .dice-points-container div:nth-child(2)`).style.gridRow = 1;
            document.querySelector(`.d${diceNo} .dice-points-container div:nth-child(3)`).style.gridColumn = 2;
            document.querySelector(`.d${diceNo} .dice-points-container div:nth-child(3)`).style.gridRow = 2;
            document.querySelector(`.d${diceNo} .dice-points-container div:nth-child(4)`).style.gridColumn = 1;
            document.querySelector(`.d${diceNo} .dice-points-container div:nth-child(4)`).style.gridRow = 3;
            document.querySelector(`.d${diceNo} .dice-points-container div:last-child`).style.gridColumn = 3;
            document.querySelector(`.d${diceNo} .dice-points-container div:last-child`).style.gridRow = 3;
            break;
        case 6:
            root.style.setProperty(`--grid${diceNo}-size-x`, "2");
            root.style.setProperty(`--grid${diceNo}-size-y`, "3");
            break;
    }
}

function createPoints(noOfPoints) {
    points = document.querySelectorAll(".dice-points-container");
    for (n = 0; n < 2; n++) {
        for (i = 0; i < noOfPoints[n]; i++) {
            points[n].innerHTML += "<div></div>";
        }
        resultTags[n].innerHTML = noOfPoints[n];
        steGridSize(n + 1, noOfPoints[n]);
    }
}



// Win Logic ---------------------------
if (diceRolls[0] > diceRolls[1]) {
    diceLable.innerHTML = "Player 1 Wins!";
}
else if (diceRolls[0] < diceRolls[1]) {
    diceLable.innerHTML = "Player 2 Wins!";
} else {
    diceLable.innerHTML = "Draw.";
}

createPoints(diceRolls);
