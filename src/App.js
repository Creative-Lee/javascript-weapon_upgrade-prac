const OutputView = require('./views/OutputView.js');

class App {
  play() {
    OutputView.printGameStartMsg();
  }
}

new App().play();

module.exports = App;
