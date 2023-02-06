let playerSelection = prompt('Rock, Paper, or Scissors?');
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let compNum = 0;
let ans = '';

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
        var playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        var computerSelection = getComputerChoice();
        if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                computerScore++;
                ans = 'You lose! Paper beats Rock!';
                return ans;
            } else if (computerSelection === 'scissors') {
                playerScore++;
                ans = 'You win! Rock beats scissors!';
                return ans;  
            } else {ans = 'You tied!';
            return ans;
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                playerScore++;
                ans = 'You win! Paper beats Rock!';
                return ans;
            } else if (computerSelection === 'scissors') {
                computerScore++;
                ans = 'You lose! Scissors beats Paper';
                return ans;
          } else {
            ans = 'You tied!';
            return ans;
          }
        } else  (playerSelection === 'scissors') 
            if (computerSelection === 'rock') {
                computerScore++;
                ans = 'You lose! Rock beats Scissors!';
                return ans;
            } else if (computerSelection === 'paper') {
                playerScore++;
                ans = 'You win! Scissors beats Paper!';
                return ans;
            }
        }
        function game() {
            playRound(playerSelection, computerSelection);
                while (playerScore < 5 && computerScore < 5) {
                    console.log(ans)
                    playRound(playerSelection, computerSelection)
                }  if ( playerScore === 5) {
                    return `You win! You scored ${playerScore}, and the Computer only scored ${computerScore}!`;
                } else return `You lose! You scored ${playerScore}, and the Computer scored ${computerScore}!`;
            }
        
    
    
    
