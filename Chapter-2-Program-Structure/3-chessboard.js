// Chess Board Pattern
// size will determine the sides size
let size = 8;
let chess_board = "";
for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    if ((x + y) % 2 == 0) {
      chess_board += " ";
    } else {
      chess_board += "#";
    }
  }
  chess_board += "\n";
}
console.log(chess_board);
