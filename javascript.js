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
        var playerSelection = prompt('Rock, Paper, or Scissors?');
        var computerSelection = getComputerChoice();
        if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                computerScore++;
                return 'You lose! Paper beats Rock!';
            } else if (computerSelection === 'scissors') {
                playerScore++;
                return 'You win! Rock beats scissors!'   
            } else {return 'You tied!';
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                playerScore++;
                return 'You win! Paper beats Rock!';
            } else if (computerSelection === 'scissors') {
                computerScore++;
         return 'You lose! Scissors beats Paper';
          } else {
             return 'You tied!';
          }
        } else  (playerSelection === 'scissors') 
            if (computerSelection === 'rock') {
                computerScore++;
                return 'You lose! Rock beats Scissors!'
            } else if (computerSelection === 'paper') {
                playerScore++;
                return 'You win! Scissors beats Paper!';
            }
        }
        function game() {
            var playerSelection = prompt('Rock, Paper, or Scissors?');
            var computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
                while (playerScore < 5 && computerScore < 5) {
                    playRound(playerSelection, computerSelection);
                }  if ( playerScore === 5) {
                    return `'You win! You scored ${playerScore}, and the Computer only scored ${computerScore}!`;
                } else return `You lose! You scored ${playerScore}, and the Computer scored ${computerScore}!`;
            }
        
    
    
    
