//A simple rock-paper-scissors game. Type game() in the console to start


function getComputerChoice() {
    let choice;
    let result;
    choice = Math.floor(Math.random() * 3) + 1; // get a random number within the range of 0 to 3, add 1 to it (to make sure we're always getting at least 1) and round it down

    if (choice === 1) {
        result = "ROCK";
    } else if (choice === 2) {
        result = "PAPER";
    } else if (choice === 3) {
        result = "SCISSORS";
    }
    return result;
}

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") { // to make sure we're passing through valid inputs only
        if (playerSelection === computerSelection) {
            result = `Draw! You selected ${playerSelection} and so did your opponent!`;
        } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") { // rock beats scissors
            result = `You win this round! ${playerSelection} beats ${computerSelection}!`;
        } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") { // scissors beat paper
            result = `You win this round! ${playerSelection} beat ${computerSelection}!`;
        } else if (playerSelection === "PAPER" && computerSelection === "ROCK") { // paper beats rock
            result = `You win this round! ${playerSelection} beats ${computerSelection}!`;
        } else {
            result = `You lose this round! ${computerSelection} beats ${playerSelection}!`; // anything else is a lose condition for the player
        }
    } else {
        console.log("Wrong input!");
    }
    return result;
}

function game() {
    let playerInput = "";
    let playerChoice = "";
    let computerChoice = "";
    let gamesWonByPlayer = 0;
    let gamesWonByAi = 0;
    let roundResult = "";

    for (let i = 0; i < 5; i++) { // play the game five times in a row
        computerChoice = getComputerChoice();
        playerInput = prompt("Please type in your selection. Valid inputs are \"Rock\", \"Paper\" or \"Scissors\"");
        playerChoice = playerInput.toUpperCase(); // to make input case-insensitive to allow for proper comparisons
        roundResult = playRound(playerChoice, computerChoice);
        if (roundResult.includes("You win this round")) { // to detect if a player won
            gamesWonByPlayer++;
        } else if (roundResult.includes("You lose this round")) { // to detect if a player lost
            gamesWonByAi++;
        }
        console.log(roundResult);
    }

    if (gamesWonByPlayer === gamesWonByAi) {
        console.log(`You won ${gamesWonByPlayer} rounds and so did the AI. It's a draw!`);
    } else if (gamesWonByPlayer > gamesWonByAi) {
        console.log(`You won ${gamesWonByPlayer} rounds while the AI won ${gamesWonByAi} rounds. That makes you the winner!`)
    } else {
        console.log(`You won ${gamesWonByPlayer} rounds while the AI won ${gamesWonByAi} rounds. You lose, shit happens!`)
    }

}