var playerSelection = 'paper' //prompt('Rock, Paper, or Scissors?');
var computerSelection = 'rock' //getComputerChoice();
let playerScore = 0;
let computerScore = 0;
// Computer Choice Generator
function getComputerChoice() {
    let compNum = Math.floor(Math.random() * 100);
    if (compNum <= 33) {
         compChoice = 'rock';
    } else if (compNum >= 34 && compNum <= 66) {
        compChoice = 'paper';
    } else  (compChoice = 'scissors');
        return compChoice;
    }
    //Game Logic
    function playRound() {
        if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                computerScore++;
                return 'You lose! Paper beats Rock!';
            } else if (computerSelection === 'scissors') {
                playerScore = playerScore++;
                return 'You win! Rock beats scissors!'   
            } else {return 'You tied!';
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                playerScore + 1;
                return 'You win! Paper beats Rock!';
            } else if (computerSelection === 'scissors') {
                computerScore + 1;
         return 'You lose! Scissors beats Paper';
          } else {
             return 'You tied!';
          }
        } else  (playerSelection === 'scissors') 
            if (computerSelection === 'rock') {
                computerScore + 1;
                return 'You lose! Rock beats Scissors!'
            } else if (computerSelection === 'paper') {
                playerScore + 1;
                return 'You win! Scissors beats Paper!';
            }
        }
    //function game() {
        //playRound(playerSelection, computerSelection) {
          //  if (playerScore < 5 && computerScore < 5) {

           // }

      //  }
       // }
    
    
    
