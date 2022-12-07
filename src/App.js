const OutputView = require('./views/OutputView.js');
const GameController = require('./GameController.js');

class App {
  play() {
    OutputView.printGameStartMsg();

    new GameController().start();
  }
}

new App().play();

module.exports = App;
