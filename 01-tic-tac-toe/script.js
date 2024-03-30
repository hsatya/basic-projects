let currentPlayer = "X";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const cells = document.querySelectorAll(".marker-btn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

function handleClick(event) {
  const row = event.target.parentElement.parentElement.rowIndex;
  const col = event.target.parentElement.cellIndex;
  // console.log(board);
  if (board[row][col] === "") {
    board[row][col] = currentPlayer;
    event.target.textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      result.classList.remove("hide");
      result.classList.add("show");
      result.innerHTML = `${currentPlayer} wins!`;
    } else if (checkDraw()) {
      result.classList.remove("hide");
      result.classList.add("show");
      result.innerHTML = "Its a draw";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  } else {
    alert("This cell is already filled.");
  }
}

// Check win
function checkWin(player) {
  // Check row
  for (let i = 0; i < 3; ++i) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }
  }
  // Check column
  for (let j = 0; j < 3; ++j) {
    if (
      board[0][j] === player &&
      board[1][j] === player &&
      board[2][j] === player
    ) {
      return true;
    }
  }
  if (
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    return true;
  }
}

// check draw
function checkDraw() {
  for (let row of board) {
    for (let cell of row) {
      if (cell === "") {
        return false;
      }
    }
  }
  return true;
}

// Reset the board
function resetBoard() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  currentPlayer = "X";
  result.classList.remove("show");
  result.classList.add("hide");
  result.innerHTML = "";
}

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

reset.onclick = resetBoard;
