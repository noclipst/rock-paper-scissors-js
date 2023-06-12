//A simple rock-paper-scissors game. Type game() in the console to start


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1; // get a random number within the range of 0 to 3, add 1 to it (to make sure we're always getting at least 1) and round it down

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

function game() {
    let gamesWonByPlayer = 0;
    let gamesWonByAi = 0;

    for (let i = 0; i < 5; i++) { 
        const computerChoice = getComputerChoice();
        const playerInput = prompt("Please type in your selection. Valid inputs are \"Rock\", \"Paper\" or \"Scissors\"");
        const playerChoice = playerInput.toUpperCase(); // to make input case-insensitive to allow for proper comparisons
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