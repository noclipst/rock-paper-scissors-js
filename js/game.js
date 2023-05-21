// A simple rock-paper-scissors game

// Player plays against the computer

// 1. Create a function to get computer's choice. It must be random and return either "rock", "paper", or "scissors"
// Pseudocode:
// function getComputerChoice()
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
// 3. Create a function that launches the game. The game must be played 5 times. Must keep score of the game. Must return the winner of the game by comparing the scores
//  function game()
//      get input from the player via prompt
//      make it uppercase;
//      create new variable, assign the computer's choice to it
//      pass players choice and computers choice to playRound()
//      track how many times player and PC won
//      do this five times in a row
//      in the end, compare how many times player and PC won and show the general reuslt
//          if playerWon > aiWon then player wins
//          else if aiWon > playerWon then PC wins
//          else draw