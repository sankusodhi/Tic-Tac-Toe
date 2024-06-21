
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function placeMark(cell) {
  const index = Array.from(cell.parentNode.children).indexOf(cell);
  if (gameBoard[index] === '') {
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      document.getElementById('winner').textContent = `${currentPlayer} wins! 🎉😊`;
      disableBoard();
    } else if (gameBoard.every(cell => cell !== '')) {
      document.getElementById('winner').textContent = 'It\'s a tie!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin(player) {
  return winningConditions.some(condition => {
    return condition.every(index => gameBoard[index] === player);
  });
}

function disableBoard() {
  document.querySelectorAll('.cell').forEach(cell => {
    cell.onclick = null;
  });
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  document.querySelectorAll('.cell').forEach(cell => {
    cell.textContent = '';
  });
  document.getElementById('winner').textContent = '';
  enableBoard();
}

function enableBoard() {
  document.querySelectorAll('.cell').forEach(cell => {
    cell.onclick = function() { placeMark(this); };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  enableBoard();
});
