/* Twelve global variables representing each player's move types and values (3 move types and 3 move values for each player). These variable names should be in the form of playerOneMoveOneType, playerOneMoveOneValue, etc. */

// Player One moves and values

let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

// Player Two moves and values

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

// variable for win count

let playerOneWins;
let playerTwoWins;

/* A function called setPlayerMoves, which will take a string representing a player (in the form of 'Player One' or 'Player Two'), three move types, and three move values, and set the correct global move variables. The method signature for this function should be as follows: setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue). */

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue ||
      !moveThreeType || !moveThreeValue) {
    return;
  }

  if (!isValidMoveType(moveOneType) ||
      !isValidMoveType(moveTwoType) ||
      !isValidMoveType(moveThreeType)) {
    return;
  }

  if (!isValidMoveValue(moveOneValue) ||
      !isValidMoveValue(moveTwoValue) ||
      !isValidMoveValue(moveThreeValue)) {
    return;
  }

  if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
    return;
  }

  if (moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue >99) {
    return;
  }

  if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) {
    return;
  }

  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
}

// valid move value must be between 1 and 99

function isValidMoveValue(moveValue) {
  return (moveValue >= 1) && (moveValue <= 99);
  }

  // valid move type must be rock, paper, or scissors

function isValidMoveType(moveType) {
return (moveType === 'rock') ||
       (moveType === 'paper') ||
       (moveType === 'scissors');
}

// function to determine the winner of each move

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType,
                       playerTwoMoveValue) {
// first check to see if moves are valid and return null if not
  if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
    return null;
  }

// if moves are the same, check to see who has the higher value and return the winner, else it's a tie
  if (playerOneMoveType === playerTwoMoveType) {
    if (playerOneMoveValue > playerTwoMoveValue) {
      return 'Player One';
    } else if (playerOneMoveValue < playerTwoMoveValue) {
      return 'Player Two';
    } else {
      return 'Tie';
    }
  }

  // regular RPS logic here

  if (playerOneMoveType === 'rock') {
    if (playerTwoMoveType === 'scissors') {
      return 'Player One';
    } else if (playerTwoMoveType === 'paper') {
      return 'Player Two';
    }
  } else if (playerOneMoveType === 'scissors') {
    if (playerTwoMoveType === 'paper') {
      return 'Player One';
    } else if (playerTwoMoveType === 'rock') {
      return 'Player Two';
    }
  } else {
    if (playerTwoMoveType === 'rock') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }

}

/* A function called getRoundWinner, which takes a round number (1, 2, or 3), compares both player's move types and values for that round, and returns the appropriate winner ('Player One', 'Player Two', or 'Tie') */

function getRoundWinner(roundNumber) {
  if (roundNumber === 1) {
    return getMoveWinner(playerOneMoveOneType,
                         playerOneMoveOneValue,
                         playerTwoMoveOneType,
                         playerTwoMoveOneValue);
  } else if (roundNumber === 2) {
    return getMoveWinner(playerOneMoveTwoType,
                         playerOneMoveTwoValue,
                         playerTwoMoveTwoType,
                         playerTwoMoveTwoValue);
  } else if (roundNumber === 3) {
    return getMoveWinner(playerOneMoveThreeType,
                         playerOneMoveThreeValue,
                         playerTwoMoveThreeType,
                         playerTwoMoveThreeValue);
  } else {
    return null;
  }
}

/* A function called getGameWinner, which compares both player's move types and values for the whole game and returns the appropriate winner ('Player One', 'Player Two', or 'Tie') */

function getGameWinner() {
  if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerOneMoveTwoType || !playerOneMoveThreeType || !playerOneMoveThreeValue || !playerTwoMoveOneType || !playerTwoMoveOneValue || !playerTwoMoveTwoType || !playerTwoMoveTwoValue || !playerTwoMoveThreeType || !playerTwoMoveThreeValue) {
    return null;
  }
  playerOneWins = 0;
  playerTwoWins = 0;

  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  winRound(roundOneWinner);
  winRound(roundTwoWinner);
  winRound(roundThreeWinner);

  if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else {
    return 'Tie';
  }
}

function winRound(winner) {
  if (winner === 'Player One') {
    playerOneWins++;
  } else if (winner === 'Player Two') {
    playerTwoWins++;
  }
}

/* Bonus: A function called setComputerMoves, which chooses three random moves for player two. The move type for each move should be completely random, and the move values should be random but add up to 99. */
function setComputerMoves() {

}
