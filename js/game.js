//A simple rock-paper-scissors game. Type game() in the console to start


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

function declareWinner(gamesWonByPlayer, gamesWonByAi) {
    if (gamesWonByPlayer === gamesWonByAi) {
        console.log(`You won ${gamesWonByPlayer} rounds and so did the AI. It's a draw!`);
    } else if (gamesWonByPlayer > gamesWonByAi) {
        console.log(`You won ${gamesWonByPlayer} rounds while the AI won ${gamesWonByAi} rounds. That makes you the winner!`)
    } else {
        console.log(`You won ${gamesWonByPlayer} rounds while the AI won ${gamesWonByAi} rounds. You lose, shit happens!`)
    }
}

// buttons
const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');

const body = document.querySelector('body');

btnRock.addEventListener('click', function() {
    const playerSelection = "ROCK";
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    displayResult(roundResult);
});

btnPaper.addEventListener('click', function() {
    const playerSelection = "PAPER";
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    displayResult(roundResult);
});

btnScissors.addEventListener('click', function() {
    const playerSelection = "SCISSORS";
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    displayResult(roundResult);
});

const divForResults = document.createElement('div');

divForResults.textContent = "CURRENT SCORE:";
divForResults.style.display = 'flex';
divForResults.style.justifyContent = 'center';
divForResults.style.alignItems = 'center';
divForResults.style.flexDirection = 'column';
body.appendChild(divForResults);

function displayResult(roundResult) {
    const paragraph = document.createElement('p');
    paragraph.textContent = roundResult;
    divForResults.appendChild(paragraph);
}


function game() {
    let gamesWonByPlayer = 0;
    let gamesWonByAi = 0;

    for (let i = 0; i < 5; i++) { 
        const computerChoice = getComputerChoice();
        const playerChoice = prompt("Please type in your selection. Valid inputs are \"Rock\", \"Paper\" or \"Scissors\"").toUpperCase(); // make input case insensitive to allow for comparisons
        const roundResult = playRound(playerChoice, computerChoice);
        if (roundResult.includes("You win this round")) {
            gamesWonByPlayer += 1;
        } else if (roundResult.includes("You lose this round")) {
            gamesWonByAi += 1;
        }
        console.log(roundResult);
    }

    declareWinner(gamesWonByPlayer, gamesWonByAi);

}