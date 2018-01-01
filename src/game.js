
// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`

import { Board } from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    if (numberOfBombs < numberOfRows * numberOfColumns) {
      this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    } else {
      console.log('The number of bombs must be less than the number of tiles on the board. Please specify a new game board.');
    }
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Sorry, game over.');
      this._board.print();
    } else if (this._board.hasSafeTiles() && this._board.playerBoard[rowIndex][columnIndex] === '0') {
      this._board.flipNeighborTiles(rowIndex, columnIndex);
      console.log('Current Board:');
      this._board.print();
    } else if (this._board.hasSafeTiles()) {
      console.log('Current Board:');
      this._board.print();
    } else {
      let endTime = new Date();
      let timeTakenToFinishGame = (endTime - this._board.startTime) / 1000;
      console.log(`Congratulations, you win!\nYou completed this game in ${timeTakenToFinishGame} seconds.`);
      this._board.print();
    }
  }

  placeFlag(rowIndex, columnIndex) {
    this._board.flagTile(rowIndex, columnIndex);
    this._board.print();
  }

  removeFlag(rowIndex, columnIndex) {
    this._board.unflagTile(rowIndex, columnIndex);
    this._board.print();
  }
}