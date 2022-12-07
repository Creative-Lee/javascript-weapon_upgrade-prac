const UpgradeGame = require('./UpgradeGame.js');
const Validation = require('./Validation.js');
const { InputView, OutputView } = require('./views');
const requestErrorHandler = require('./utils/requestErrorHandler.js');

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
      if (!requestErrorHandler(Validation.challengeCommand, command)) {
        this.#requestChallengeCommand();
        return;
      }

      this.#processChallengeCommand(command);
    });
  }

  #processChallengeCommand(command) {}
}

module.exports = GameController;
