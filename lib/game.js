'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// If you think there is a bomb on a specific tile, for example (0, 1), you can run the this command:
// game.placeFlag(0, 1);
// If you want to unflag that tile, you can run this command:
// game.removeFlag(0, 1);
// When done run `.exit`

var _board = require('./board');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    if (numberOfBombs < numberOfRows * numberOfColumns) {
      this._board = new _board.Board(numberOfRows, numberOfColumns, numberOfBombs);
      this._startTime = new Date();
    } else {
      console.log('The number of bombs must be less than the number of tiles on the board. Please specify a new game board.');
    }
  }

  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(rowIndex, columnIndex) {
      this._board.flipTile(rowIndex, columnIndex);
      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        console.log('Sorry, game over.');
        this._board.print();
      } else if (this._board.hasSafeTiles()) {
        console.log('Current Board:');
        this._board.print();
      } else {
        var endTime = new Date();
        var timeTakenToFinishGame = (endTime - this._startTime) / 1000;
        console.log('Congratulations, you win!\nYou completed this game in ' + timeTakenToFinishGame + ' seconds.');
        this._board.print();
      }
    }
  }, {
    key: 'placeFlag',
    value: function placeFlag(rowIndex, columnIndex) {
      this._board.flagTile(rowIndex, columnIndex);
      this._board.print();
    }
  }, {
    key: 'removeFlag',
    value: function removeFlag(rowIndex, columnIndex) {
      this._board.unflagTile(rowIndex, columnIndex);
      this._board.print();
    }
  }]);

  return Game;
}();