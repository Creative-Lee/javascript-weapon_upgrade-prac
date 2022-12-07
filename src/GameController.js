const UpgradeGame = require('./UpgradeGame.js');

const { InputView, OutputView } = require('./views');

class GameController {
  #upgradeGame;

  constructor() {
    this.#upgradeGame = new UpgradeGame();
  }

  start() {
    const weaponGrade = this.#upgradeGame.getWeaponGrade();
    OutputView.printWeaponGrade(weaponGrade);

    InputView.readChallengeCommand((command) => {});
  }
}

module.exports = GameController;
