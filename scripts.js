const GameBoard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];

  return {
    getBoard: function () {
      return board;
    },
    updateBoard: function (index, symbol) {
      if (board[index] === "") {
        board[index] = symbol;
      }
    },
  };
})();
function getBoard() {
  return GameBoard.getBoard();
}

function Player(name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

function getPlayer(index) {
  const player1 = new Player("Pedro", "X");
  const player2 = new Player("Juan", "O");
  const players = [player1, player2];
  return players[index];
}

function getTurn() {
  return turn(getPlayer(0), getPlayer(1), 1);
}
function getLastTurn() {
  return turn(getPlayer(0), getPlayer(1), 2);
}
function modifyBoard(index) {
  const board = getBoard();
  if (checkResult()) {
  } else {
    if (board[index] == "") {
      const player = getTurn();
      const symbol = player.symbol;
      GameBoard.updateBoard(index, symbol);
      printBoard(index, symbol);
      checkResult();
    }
  }
}
function win() {
  getLastTurn();
  alert("Alguien ha ganado");
}

function printBoard(index, symbol) {
  document.getElementById(index).innerHTML = symbol;
}
function checkResult() {
  const board = getBoard();

  if (
    (board[0] === board[1] && board[1] === board[2] && board[0] !== "") ||
    (board[3] === board[4] && board[4] === board[5] && board[3] !== "") ||
    (board[6] === board[7] && board[7] === board[8] && board[6] !== "") ||
    (board[0] === board[3] && board[3] === board[6] && board[0] !== "") ||
    (board[1] === board[4] && board[4] === board[7] && board[1] !== "") ||
    (board[2] === board[5] && board[5] === board[8] && board[2] !== "") ||
    (board[0] === board[4] && board[4] === board[8] && board[0] !== "") ||
    (board[2] === board[4] && board[4] === board[6] && board[2] !== "")
  ) {
    const lastTurn = getLastTurn();

    document.getElementById("result").innerHTML = lastTurn.symbol + " Win";

    return getLastTurn();
  } else {
  }
}

function turn(player1, player2, state) {
  let getBoard = GameBoard.getBoard();
  const contador1 = getBoard.filter(
    (gameBoard) => gameBoard === player1.symbol
  ).length;
  const contador2 = getBoard.filter(
    (gameBoard) => gameBoard === player2.symbol
  ).length;
  console.log(contador1);
  console.log(contador2);
  if (contador1 == contador2 && state == 1) {
    return player1;
  } else if (contador1 > contador2 && state == 1) {
    return player2;
  } else if (contador1 == contador2 && state == 2) {
    return player2;
  } else if (contador1 > contador2 && state == 2) {
    return player1;
  } else {
    return player1;
  }
}
