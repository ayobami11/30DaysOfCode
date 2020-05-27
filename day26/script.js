// Variables for the options
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

// Variables for the results
let computer = document.getElementById('computer');
let player = document.getElementById('player');
let result = document.getElementById('result');

// Variables for the scores
let playerTally = 0;
let computerTally = 0;
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');

// Restart button
let restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', () => {
  playerTally = 0;
  playerScore.innerHTML = `Player: ${playerTally}`;
  computerTally = 0;
  computerScore.innerHTML = `Computer: ${computerTally}`;
});

// Gets the user choice
let getUserChoice = '';
  rock.addEventListener('click', () => {getUserChoice = 'rock'});
  paper.addEventListener('click', () => {getUserChoice = 'paper'});
  scissors.addEventListener('click', () => {getUserChoice = 'scissors'});

// Gets the computer choice
function getComputerChoice() {
  let computerInput = Math.floor(Math.random() * 3);
  switch (computerInput) {
    case 0: return 'rock';
    break;
    case 1: return 'paper';
    break;
    case 2: return 'scissors';
    break;
    default: 'An error occurred. Please try again later';
    break;
  }
}

// Determines the winner
function determineWinner(userChoice, computerChoice) {
  if(userChoice === computerChoice) {
    result.innerHTML = 'It is a tie! Great game.';
      }
  
  else if(userChoice === 'rock') {
      if(computerChoice === 'paper') { 
        result.innerHTML = 'Computer won!';
      } else {
        result.innerHTML = 'You won!';
      }
  }
  
  else if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        result.innerHTML = 'Computer won!';
      } else {
            return 'You won!';
      }
  }
  
  else if(userChoice === 'scissors') {
    if(computerChoice === 'rock') { 
      result.innerHTML = 'Computer won!';
  } else {
      result.innerHTML = 'You won!';
  }
}
}

// Display the results
function playGame() {
const userValue = getUserChoice;
player.innerHTML = `Your choice: ${userValue}`;
const computerValue = getComputerChoice();
computer.innerHTML = `Computer choice: ${computerValue}`;

determineWinner(userValue, computerValue);

// Counts the score
if (result.innerHTML === 'Computer won!') {
  computerTally++;
  result.style.color = 'red';
} else if(result.innerHTML === 'You won!') {
  playerTally++;
  result.style.color = 'green';
} else {
  result.style.color = 'blue';
}

playerScore.innerHTML = `Player: ${playerTally}`;
computerScore.innerHTML = `Computer: ${computerTally}`;
}

// Invokes the playGame() function when any of the options are clicked
rock.addEventListener('click', () => {playGame()});
paper.addEventListener('click', () => {playGame()});
scissors.addEventListener('click', () => {playGame()});