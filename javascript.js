const btns = document.querySelectorAll('button');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;
let compNum = 0;
let ans = '';
function pickRock() {
    playerSelection = 'rock';
    playRound();
    
};
function pickPaper() {
    playerSelection = 'paper';
    playRound();
};
function pickScissors() {
    playerSelection = 'scissors';
    playRound();
    
};








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
        //playerSelection = '';   //prompt('Rock, Paper, or Scissors?').toLowerCase();
        computerSelection = getComputerChoice();
        if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                computerScore++;
                ans = 'You lose! Paper beats Rock!';
                alert(ans);
            } else if (computerSelection === 'scissors') {
                playerScore++;
                ans = 'You win! Rock beats scissors!';
                alert(ans);  
            } else {ans = 'You tied!';
            alert(ans);
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                playerScore++;
                ans = 'You win! Paper beats Rock!';
                alert(ans);
            } else if (computerSelection === 'scissors') {
                computerScore++;
                ans = 'You lose! Scissors beats Paper';
                alert(ans);
          } else {
            ans = 'You tied!';
            alert(ans);
          }
        } else if (playerSelection === 'scissors') 
            if (computerSelection === 'rock') {
                computerScore++;
                ans = 'You lose! Rock beats Scissors!';
                alert(ans);
            } else if (computerSelection === 'paper') {
                playerScore++;
                ans = 'You win! Scissors beats Paper!';
                alert(ans);
            } else {
                ans = 'You tied!';
                alert(ans);
            }
        };
        // Plays 5 rounds returning results of each round and final score.
        // function game() {
        //     playRound(playerSelection, computerSelection);
        //         while (playerScore < 5 && computerScore < 5) {
        //             console.log(ans)
        //             playRound(playerSelection, computerSelection)
        //         }  if ( playerScore === 5) {
        //             return `You win! You scored ${playerScore} , and the Computer only scored ${computerScore}!`;
        //         } else return `You lose! You scored ${playerScore}, and the Computer scored ${computerScore}!`;
        //     }
        
    
    
    
