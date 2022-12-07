const UpgradeGame = require('./UpgradeGame.js');
const OutputView = require('./views/OutputView.js');

class GameController {
  #upgradeGame;

  constructor() {
    this.#upgradeGame = new UpgradeGame();
  }

  start() {
    const weaponGrade = this.#upgradeGame.getWeaponGrade();
    OutputView.printWeaponGrade(weaponGrade);
  }
}

module.exports = GameController;
