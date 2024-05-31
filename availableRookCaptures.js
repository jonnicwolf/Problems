/**
* @param {character[][]} board
* @return {number}
*/
const numRookCaptures = (board) => { 
  let rook_position;
  let result = 0

  for (let row=0; row < board.length; row++) {
    if (board[row].includes('R')) {
      rook_position = [row, board[row].findIndex(item => item === "R")];
      break;
    };
  };

  for (let i=rook_position[0]; i>=0; i--){
    const col = rook_position[1];
    if (board[i][col] === 'p') {
      result+=1;
      break;
    }
    else if (board[i][col] === 'B') break;
  };

  for (let i=rook_position[0]; i<=7; i++) {
    const col = rook_position[1];
    if (board[i][col] === 'p') {
      result+=1;
      break;
    }
    else if (board[i][col] === 'B') break;
  };

  for (let i=rook_position[1]; i>=0; i--) {
    const row = rook_position[0];
    if (board[row][i] === 'p') {
      result+=1;
      break;
    }
    else if (board[row][i] === 'B') {
      break;
    };
  };

  for (let i=rook_position[1]; i<=7; i++) {
    const row = rook_position[0];
    if (board[row][i] === 'p') {
      result+=1;
      break;
    }
    else if (board[row][i] === 'B') {
      break;
    };
  };
  return result;
};

numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]])
 