const UpgradeGame = require('./UpgradeGame.js');
const Validation = require('./Validation.js');
const { InputView, OutputView } = require('./views');

class GameController {
  #upgradeGame;

  constructor() {
    this.#upgradeGame = new UpgradeGame();
  }

  start() {
    const weaponGrade = this.#upgradeGame.getWeaponGrade();
    OutputView.printWeaponGrade(weaponGrade);

    this.#requestChallengeCommand();
  }

  #requestChallengeCommand() {
    InputView.readChallengeCommand((command) => {
      Validation.challengeCommand(command);
    });
  }
}

module.exports = GameController;
