// /*
// 1.we start the game
// 2.there are two players [rule]
// 3.lets say we store their names.
// 4.x plays first [rule]
// 5.they mark their spot:

// <!--   x _ _
//        _ _ _
//        _ _ _              -->

// 6. O, PLAYS:
// <!--   x _ _
//        _ O _
//        _ _ _              -->

// 7.game continuos ,until one of these things happen:
// 1, x wins 2. O wins 3. more moves are left
// 4.draw

// #Emerging Requirements
// 1.store the players name
// 2.currentPlayer, nextPlayer
// 3.store the board
// 4.game status .
// 5.Game orchestation - something to simulate turn by turn game

// */
// //we can begin the game by asking the names of the players

// const ticTacToe = (xName, onName) => {
//   const X: string = "X"; //u can use any emoji instead of X
//   const O: string = "O";
//   const currentPlayer: string = X; //we have current player
//   const players: { O: any, X: any } = {
//     X: xName,
//     O: onName,
//   };

//   //how do we store next player
//   //   option1 - using if else ,if the current player is x next will on O
//   //   option 2 - this is more nice nifty way of simpling decalring your intend of nextplayer:

//   //we have to store the status of the baord this is the point where data structure becomes important.
//   //visual representatuon of data
//   const board: string[] = ["ongoing", "", "", "", "", "", "", "", "", ""]; //the data structue we using is closer to the actual domain and the closere the data structure the cleaner the code
//   //concept lookup table
//   //nextPlayer[currentPlayer] //if  X, then O
//   let currentPlayer: String = "X"; //X plays first --default value is x
//   const nextPlayer: { O: String, X: String } = {
//     X: O,
//     O: X,
//   };

//   //1 usage new *
//   const isValidMove = (move): void => {
//     //move should bet the right and not already taken
//     return 1 <= move && move <= 9 && board[move] === " "; //tip - when u have multiple comparisons like this,never ever used the greater than sign this simple rule to follow ,foe example -
//     //( 1 <= move && move <= 9 ) -in number line 1 to 9 if we mark move will be in the middle and this code visually refelects it and its easier to understand for the next prgorammer to understand it thats why u dont user greater than sign always use lower or equal
//   };

//   //1 uaseg new*

//   const computeStatus = () :string => {
//     //ongoing ,win-x,win-o
//     let result :string = "ongoing"; //default value
//     //how to know if x won or o won ,we have to look winning combinations
//      const winningCombos :(...)[] [
//       //rows
//       [1, 2 ,3],
//       [4, 5, 6],
//       [7, 8, 9],

//       //columns
//       [1, 4 ,7],
//       [2, 5, 8],
//       [3, 6, 9],

//       // diagonals
//       [1, 5, 9],
//       [3, 5, 7]

//      ]

//       //check for a win x
//     //cehck for win o
//     winningCombos.forEach(i1:number, i2: number, i3: number]): string|undefined => {
//       if(board[i1] === board[i2] &&
//         board[i2] === board[i3] &&
//         board[i3] === currentPlayer) {
//           return `Win-${currentPlayer}`;
//         }
//     }

//     });

//     //check for draw
//     let areAllCellsTaken :boolean = false ;
//     for(let i :number = 1; i<= 9;i++) {
//       if(board[i] !== "") {
//         areAllCellsTaken = true;
//       }
//     }

//     if (areAllCellsTaken)
//     return "draw"

//         //continue  the game
//         return result;

//     };

//   return (player, move) => {
//     //validate the right player : return <error> if not
//     if (player !== currentPlayer) {
//       return [false, `Not your turn.it's ${currentPlayer}'s turn.`];
//     }
//     //validate right move: return <error> if not
//     if (!isValidMove(move)) return [false, "Invalid move, try again."]; //stopped on programming -technique used for writing complex feature where u assume some of the lower pieces exist u write the code that puts them than u fill them one by one

//     board[move] = currentPlayer;
//     board[0] = computeStatus[currentPlayer];
//     currentPlayer = nextPlayer[currentPlayer];
//     //advance the game:
//     //1. update the board
//     //2.compute the game status
//     //3.next player turn
//     return[true,board];
//   };
// };
// //the more closer the code is to domain ,the more declarative the code is the more cleaner the code is
// module.exports = {ticTacToe};
const ticTacToe = (xName, oName) => {
  const X = "X"; // You can use any emoji instead of X
  const O = "O";
  const players = {
    X: xName,
    O: oName,
  };

  const board = ["ongoing", "", "", "", "", "", "", "", "", ""];

  const nextPlayer = {
    O: X,
    X: O,
  };

  const isValidMove = (move) => {
    return 1 <= move && move <= 9 && board[move] === " ";
  };

  const computeStatus = () => {
    let result = "ongoing";
    const winningCombos = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    winningCombos.forEach(([i1, i2, i3]) => {
      if (
        board[i1] === board[i2] &&
        board[i2] === board[i3] &&
        board[i3] === currentPlayer
      ) {
        result = `Win-${currentPlayer}`;
      }
    });

    let areAllCellsTaken = true;
    for (let i = 1; i <= 9; i++) {
      if (board[i] === "") {
        areAllCellsTaken = false;
        break;
      }
    }

    if (areAllCellsTaken) {
      result = "draw";
    }

    return result;
  };

  return (player, move) => {
    if (player !== currentPlayer) {
      return [false, `Not your turn. It's ${currentPlayer}'s turn.`];
    }

    if (!isValidMove(move)) {
      return [false, "Invalid move, try again."];
    }

    board[move] = currentPlayer;
    board[0] = computeStatus();
    currentPlayer = nextPlayer[currentPlayer];

    return [true, board];
  };
};

module.exports = { ticTacToe };
