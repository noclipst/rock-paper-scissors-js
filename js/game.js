const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');

const body = document.querySelector('body');

const divForResults = document.createElement('div');
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
    if (document.getElementById('round-result')) {
        document.getElementById('round-result').textContent = str;
    } else {
        const para = document.createElement('p');
        para.setAttribute("id", "round-result");
        para.textContent = str;
        divForResults.appendChild(para);
    }

    if (roundsWonByPlayer === 5 || roundsWonByAi === 5) {
        declareWinner(); 
    }
}

function displayRunningScore() {

    if (document.getElementById("running-score")) { // update it if already exists
        document.getElementById("running-score").textContent = `Player ${roundsWonByPlayer} : ${roundsWonByAi} Computer`;
    } else {
        const para = document.createElement('p');
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
    let choice = Math.floor(Math.random() * 3) + 1; // outputs random number within the range of 1 to 3

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
    if (roundsWonByPlayer === roundsWonByAi) {
        const gameResult = document.createElement('p');
        gameResult.textContent = `You won ${roundsWonByPlayer} rounds and so did the AI. It's a draw!`;
        divForResults.appendChild(gameResult);
    } else if (roundsWonByPlayer > roundsWonByAi) {
        const gameResult = document.createElement('p');
        gameResult.textContent = `You won ${roundsWonByPlayer} rounds while the AI won ${roundsWonByAi} rounds. Congratulations!`;
        divForResults.appendChild(gameResult);
    } else {
        const gameResult = document.createElement('p');
        gameResult.textContent = `You won ${roundsWonByPlayer} rounds while the AI won ${roundsWonByAi} rounds. You lose, shit happens!`;
        divForResults.appendChild(gameResult);
    }
}