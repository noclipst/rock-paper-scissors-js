// A simple rock-paper-scissors game

// Player plays against the computer

// 1. Create a function to get computer's choice. It must be random and return either "rock", "paper", or "scissors"
// Pseudocode:
// function getComputerChoice()
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
//      create variable "choice"
//      get random number within the range of 1-3
//      round it down to an integer
//      if 1 then "rock"
//      if 2 then "paper"
//      if 3 then "scissors"
//      return choice in uppercase to deal with both lowercase and uppercase inputs from the player
// 2. Create a function to play a single game of rock paper scissors. Two parameters should be passed to it - playerSelection and computerSelection. Input from the player must be treated as case-insensitive. It must return a string that declares who won.
// Pseudocode:
// function playRound(playerSelection, computerSelection)
//      create variable "result"
//      if playerSelection === computerSelection then DRAW
//      else if playerSelection is rock AND computerSelection is scissors then player WINS
//      else if playerSelection is scissors AND computerSelection is paper then player WINS
//      else if playerSelection is paper AND computerSelection is rock then player WINS
//      else player loses
//      return result
function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") { // to make sure we're passing through valid inputs only
        if (playerSelection === computerSelection) {
            result = `Draw! You selected ${playerSelection} and so did your opponent!`;
        } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
            result = `You win this round! ${playerSelection} beats ${computerSelection}!`;
        } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            result = `You win this round! ${playerSelection} beat ${computerSelection}!`;
        } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
            result = `You win this round! ${playerSelection} beats ${computerSelection}!`;
        } else {
            result = `You lose this round! ${computerSelection} beats ${playerSelection}!`;
        }
    } else {
        console.log("Wrong input!");
    }
    return result;
}
// 3. Create a function that launches the game. The game must be played 5 times. Must keep score of the game. Must return the winner of the game by comparing the scores
//  function game()
//      get input from the player via prompt
//      make it uppercase;
//      create new variable, assign the computer's choice to it
//      pass players choice and computers choice to playRound()
//      track how many times player and PC won
//      do this five times in a row
//      in the end, compare how many times player and PC won and show the general reuslt
//          if gamesWonByPlayer > gamesWonByAi then player wins
//          else if gamesWonByAi > gamesWonByPlayer then PC wins
//          else draw
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
        if (roundResult.includes("You win this round")) {
            gamesWonByPlayer++;
        } else if (roundResult.includes("You lose this round")) {
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