const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const psd = document.getElementById("psd");
const csd = document.getElementById("csd");
let playerscore = 0;
let computerscore = 0;

function playGame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerchoice === computerchoice){
        result = "Its A tie";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerchoice === "scissors") ? "You Win" : "You Lose";
                break;

            case "paper":
                result = (computerchoice === "rock") ? "You Win" : "You Lose";
                break;

            case "scissors":
                result = (computerchoice === "paper") ? "You Win" : "You Lose";
                break;
        }
    }
    playerdisplay.textContent = `Player: ${playerchoice}`;
    computerdisplay.textContent = `Computer: ${computerchoice}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("greentext", "redtext");

    switch(result){
        case "You Win":
            resultdisplay.classList.add("greentext");
            playerscore++;
            psd.textContent = playerscore;
            break;
        case "You Lose":
            resultdisplay.classList.add("redtext");
            computerscore++;
            csd.textContent = computerscore;
            break;
    }
}