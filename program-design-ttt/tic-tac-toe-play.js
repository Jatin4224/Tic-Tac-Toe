// const { ticTacToe } = require("./tic-tac-toe");

// const play ticTacToe(xName:"DHONI", oName: "VIRAT");

// let [result: Boolean, board:string| ...] = play("X", 1);

// const printBoard = (board) => {
//      console.log(`${board[1] || '_'} ${board[2] || '_'}  ${board[3] || '_'}`);
//      console.log(`${board[4] || '_'} ${board[5] || '_'}  ${board[6] || '_'}`);
//      console.log(`${board[7] || '_'} ${board[8] || '_'}  ${board[9] || '_'}`);
// };

// let result, boardorMessage;
// [result, boardorMessage] = play("X", 1);
// printBoard(board);

// [result, boardorMessage] = play("X", 5);

// if(result) {
//     printBoard(boardorMessage) ;
// }
// else {
//     console.log(boardorMessage)
// }

// [result, boardorMessage] = play("O", 5);

// if(result) {
//     printBoard(boardorMessage) ;
// }
// else {
//     console.log(boardorMessage)
// }

// [result, boardorMessage] = play("x", 5);

// if(result) {
//     printBoard(boardorMessage) ;
// }
// else {
//     console.log(boardorMessage)
// }

// [result, boardorMessage] = play("x", 9);

// if(result) {
//     printBoard(boardorMessage) ;
// }
// else {
//     console.log(boardorMessage)
// }
const { ticTacToe } = require("./tic-tac-toe");

const play = ticTacToe("DHONI", "VIRAT");

let [result, board] = play("X", 1);

const printBoard = (board) => {
  console.log(`${board[1] || "_"} ${board[2] || "_"}  ${board[3] || "_"}`);
  console.log(`${board[4] || "_"} ${board[5] || "_"}  ${board[6] || "_"}`);
  console.log(`${board[7] || "_"} ${board[8] || "_"}  ${board[9] || "_"}`);
};

[result, board] = play("X", 1);
printBoard(board);

[result, board] = play("X", 5);

if (result) {
  printBoard(board);
} else {
  console.log(board);
}

[result, board] = play("O", 5);

if (result) {
  printBoard(board);
} else {
  console.log(board);
}

[result, board] = play("X", 5);

if (result) {
  printBoard(board);
} else {
  console.log(board);
}

[result, board] = play("X", 9);

if (result) {
  printBoard(board);
} else {
  console.log(board);
}
