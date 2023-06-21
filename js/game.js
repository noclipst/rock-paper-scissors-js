// TODO add game reset button at the end of the game

const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');
const body = document.querySelector('body');

const divForResults = document.createElement('div'); // TODO separate function for this div?

divForResults.setAttribute('id', 'round-results');
divForResults.style.display = 'flex';
divForResults.style.justifyContent = 'center';
divForResults.style.alignItems = 'center';
divForResults.style.flexDirection = 'column';
body.appendChild(divForResults);

let roundsWonByPlayer = 0;
let roundsWonByAi = 0;

btnRock.addEventListener('click', function() {
    handleClick('ROCK');
});

btnPaper.addEventListener('click', function() {
    handleClick('PAPER');
});

btnScissors.addEventListener('click', function() {
    handleClick('SCISSORS')
});

function handleClick(choice) {
    if (roundsWonByPlayer === 5 || roundsWonByAi === 5) { // stop processing clicks if someone's already won 5 rounds
        return;
    } else {
        const playerSelection = choice;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        updateWinCounter(roundResult);
        displayRunningScore();
        displayRoundResult(roundResult);
    }
}

function displayRoundResult(str) {
    const roundResultText = document.getElementById('round-result');
    const para = document.createElement('p');
    
    
    if (roundResultText) {
        roundResultText.textContent = str;
    } else {
        para.setAttribute("id", "round-result");
        para.textContent = str;
        divForResults.appendChild(para);
    }

    if (roundsWonByPlayer === 5 || roundsWonByAi === 5) {
        declareWinner();
        initGameRefreshBtn();

        const refreshBtn = document.querySelector("#btn-game-refresh");

        refreshBtn.addEventListener("click", function() {
            restartGame();
        })
    }
}

function displayRunningScore() {
    const runningScore = document.getElementById("running-score");
    const para = document.createElement('p');

    if (runningScore) { // update it if already exists
        runningScore.textContent = `Player ${roundsWonByPlayer} : ${roundsWonByAi} Computer`;
    } else {
        para.setAttribute('id', 'running-score');
        para.textContent = `Player ${roundsWonByPlayer} : ${roundsWonByAi} Computer`;
        divForResults.appendChild(para);
    }
}

function updateWinCounter(string) {
    if (string.includes("You win this round")) {
        roundsWonByPlayer += 1;
    } else if (string.includes("You lose this round")) {
        roundsWonByAi += 1;
    }
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1; // outputs random number within the range of 1 to 3

    switch (choice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {

    if (!["ROCK", "PAPER", "SCISSORS"].includes(playerSelection)) {
        console.log("Wrong input!");
        return;
    } // to make sure we're passing through valid inputs only

    if (playerSelection === computerSelection) {
        return `Draw! You selected ${playerSelection} and so did your opponent!`;
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        return `You win this round! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose this round! ${computerSelection} beats ${playerSelection}!`
    }
}

function declareWinner() {
    const gameResult = document.createElement('p');

    // draw won't happen because we're only playing till 5 wins and both of the players can't reach 5 simultaneously
    // if (roundsWonByPlayer === roundsWonByAi) {
    //     gameResult.textContent = `You won ${roundsWonByPlayer} rounds and so did the AI. It's a draw!`;
    if (roundsWonByPlayer > roundsWonByAi) {
        gameResult.textContent = `You won ${roundsWonByPlayer} rounds while the AI won ${roundsWonByAi} rounds. Congratulations!`;
    } else {
        gameResult.textContent = `You won ${roundsWonByPlayer} rounds while the AI won ${roundsWonByAi} rounds. You lose, shit happens!`;
    }

    divForResults.appendChild(gameResult);
}

function initGameRefreshBtn() {
    const btnGameRefresh = document.createElement("button");

    btnGameRefresh.setAttribute('id', 'btn-game-refresh');
    btnGameRefresh.textContent = "Start over";
    divForResults.appendChild(btnGameRefresh);
}

function restartGame() { // to restart the game you need to reset counters and remove all the children of divForResults
    roundsWonByPlayer = 0;
    roundsWonByAi = 0;

    while (divForResults.firstChild) {
        divForResults.removeChild(divForResults.firstChild);
    }
}
