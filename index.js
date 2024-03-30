let diceRoll1 = Math.floor(Math.random() * 6) + 1;;
let diceRoll2 = Math.floor(Math.random() * 6) + 1;
let diceLable = document.querySelector(".dice-lable");
let resultTags = document.querySelectorAll(".result");

function showDice(diceNo, dicePoints, result) {
    let root = document.documentElement;
    switch (dicePoints) {
        case 1:
            root.style.setProperty(`--grid${diceNo}-size-x`, "1");
            root.style.setProperty(`--grid${diceNo}-size-y`, "1");
            break;
        case 2:
            document.querySelector(".d1 .dice-points-container div:first-child").style.gridRow = "3";
            document.querySelector(".d1 .dice-points-container div:first-child").style.gridColumn = "3";
        case 3:
            break;
        case 4:
            root.style.setProperty(`--grid${diceNo}-size-x`, "2");
            root.style.setProperty(`--grid${diceNo}-size-y`, "2");
            break;
        case 5:
            break;
        case 6:
            root.style.setProperty(`--grid${diceNo}-size-x`, "2");
            root.style.setProperty(`--grid${diceNo}-size-y`, "3");
            break;
    }
    diceDots = document.querySelectorAll(`.d${diceNo} .dice-points-container div`);
    for (n = 0; n < dicePoints; n++) {
        diceDots[n].classList.add("show");
    }
    result.innerHTML = dicePoints;
}


// Win Logic ---------------------------
if (diceRoll1 > diceRoll2) {
    diceLable.innerHTML = "Player 1 Wins!";
}
else if (diceRoll1 < diceRoll2) {
    diceLable.innerHTML = "Player 2 Wins!";
} else {
    diceLable.innerHTML = "Draw.";
}



showDice(1, diceRoll1, resultTags[0]);
showDice(2, diceRoll2, resultTags[1]);
