// const btns = document.querySelectorAll('button');                    *Unused variables 
// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissors = document.getElementById('scissors');
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
    // Game Logic
    function playRound() {
        computerSelection = getComputerChoice();
        if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                computerScore++;
                ans = 'You lose! Paper beats Rock!';

                
            } else if (computerSelection === 'scissors') {
                playerScore++;
                ans = 'You win! Rock beats scissors!';
                  
            } else {ans = 'You tied!';
            
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                playerScore++;
                ans = 'You win! Paper beats Rock!';
                
            } else if (computerSelection === 'scissors') {
                computerScore++;
                ans = 'You lose! Scissors beats Paper';
                
          } else {
            ans = 'You tied!';
            
          }
        } else if (playerSelection === 'scissors') 
            if (computerSelection === 'rock') {
                computerScore++;
                ans = 'You lose! Rock beats Scissors!';
                
            } else if (computerSelection === 'paper') {
                playerScore++;
                ans = 'You win! Scissors beats Paper!';
                
            } else {
                ans = 'You tied!';
                
            }
            document.getElementById('playerScore').innerText =`Player Score- ${playerScore}`;
            document.getElementById('computerScore').innerText = `Computer Score- ${computerScore}`;
            document.getElementById('roundResult').innerText = ans;
            checkScore();
        };
    function checkScore() {
        if (playerScore === 5 && computerScore < 5) {
            alert(`You win! Score was ${playerScore} to ${computerScore}!`);
            playerScore = 0;
            computerScore = 0;
            ans = '';
        }
        if (computerScore === 5 && playerScore < 5) {
            alert(`You lose! Score was ${computerScore} to ${playerScore}!`);
            playerScore = 0;
            computerScore = 0;
            ans = '';
        }
        document.getElementById('playerScore').innerText =`Player Score- ${playerScore}`;
        document.getElementById('computerScore').innerText = `Computer Score- ${computerScore}`;
        document.getElementById('roundResult').innerText = ans;
    };
    
