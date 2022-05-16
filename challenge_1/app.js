
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let count = 0;

const update = () => {
  let id = event.srcElement.id;
  let btn = document.getElementById(id);

  let row = id.slice(3, 4);
  let column = id.slice(4);

  if (count % 2 === 0) {
    btn.innerHTML = 'X'
    count++;
    board[row][column] = 'X';
    check(count);

  } else if (count % 2 === 1) {
    count++;
    btn.innerHTML = 'O'
    board[row][column] = 'O';
    check(count);
  }
}

const check = (count) => {
  // check rows
  for (let row = 0; row < board.length; row++) {
    if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {

      if (board[row][0] === 'X') {
        alert('Player X wins!');
        reset();
      }

      if (board[row][0] === 'O') {
        alert('Player Y wins!');
        reset();
      }
    }
  }

  // check columns
  for (let col = 0; col < board.length; col++) {
    if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {

      if (board[0][col] === 'X') {
        alert('Player X wins!');
        reset();
      }

      if (board[0][col] === 'O') {
        alert('Player Y wins!');
        reset();
      }
    }
  }

  // check left diagonal
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {

    if (board[0][0] === 'X') {
      alert('Player X wins!');
      reset();
    }

    if (board[0][0] === 'O') {
      alert('Player Y wins!');
      reset();
    }
  }

  // check right diagonal
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {

    if (board[0][2] === 'X') {
      alert('Player X wins!');
      reset();
    }

    if (board[0][2] === 'O') {
      alert('Player Y wins!');
      reset();
    }
  }

  // check a tie
  if (count >= (board.length * board.length)) {
    alert('Tie Game!');
  }

}

const reset = () => {
  let allButtons = document.getElementsByClassName('btn');

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].innerHTML = '_';
  }

  count = 0;
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
}

/*
MVP:
Client - Controller - Model - View - Client

- set a variable call count, starting from 0
- when a button is clicked
  - if count is an even number, which mean it's player X
    - assign the player's number to accorsponding element in the board
    - change the text in the button
    - invoke the check function
  - if count is an odd number, which mean it's player Y
    - assign the player's number to accorsponding element in the board
    - change the text in the button
    - invoke the check function

- create a function to change text for player X
- create a function to change text for player Y
- create a functino to check which player wins or it's ties
  - disply the message about which player wins

- reset button
  - once the button is clicked
    - board equal to default array
    - count equal to 0
    - all the buttons' text change back to empty

*/
