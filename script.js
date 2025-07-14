// Get elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const playerImg = document.getElementById('player-img');
const computerImg = document.getElementById('computer-img');
const resultDisplay = document.getElementById('result');

const choices = ['rock', 'paper', 'scissors'];

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Update images
  playerImg.src = `images/${playerChoice}.gif`;
  computerImg.src = `images/${computerChoice}.gif`;

  // Determine result
  const result = getResult(playerChoice, computerChoice);
  resultDisplay.textContent = `Result: ${result}`;
}

function getResult(player, computer) {
  if (player === computer) return "It's a Draw 🤝";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return "You Win 🎉";
  }
  return "You Lose 😢";
}

rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
