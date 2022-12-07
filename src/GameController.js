const UpgradeGame = require('./UpgradeGame.js');
const MiniGame = require('./MiniGame.js');
const Validation = require('./Validation.js');
const { InputView, OutputView } = require('./views');
const { Console } = require('@woowacourse/mission-utils');
const { GAME_COMMAND } = require('./constants/condition.js');
const inputErrorHandler = require('./utils/inputErrorHandler.js');
const generateMiniGameNumber = require('./utils/generateMiniGameNumber.js');

class GameController {
  #upgradeGame;

  constructor() {
    this.#upgradeGame = new UpgradeGame();
    this.#miniGame = new MiniGame();
  }

  start() {
    const weaponGrade = this.#upgradeGame.getWeaponGrade();
    OutputView.printWeaponGrade(weaponGrade);

    this.#requestChallengeCommand();
  }

  #requestChallengeCommand() {
    InputView.readChallengeCommand((command) => {
      const isValidCommand = inputErrorHandler(Validation.challengeCommand, command);

      if (!isValidCommand) {
        this.#requestChallengeCommand();
        return;
      }

      this.#processChallengeCommand(command);
    });
  }

  #processChallengeCommand(command) {
    if (command === GAME_COMMAND.quit) {
      this.#quitGame();
      return;
    }

    this.#requestMiniGameInput();
  }

  #requestMiniGameInput() {
    InputView.readMiniGameInput((input) => {
      const isValidInput = inputErrorHandler(Validation.miniGameInput, input);

      if (!isValidInput) {
        this.#requestMiniGameInput();
        return;
      }

      this.#miniGamePhase(input);
    });
  }

  #miniGamePhase(input) {
    const number = generateMiniGameNumber();
    this.#miniGame.setNumber(number);

    const miniGameResult = this.#miniGame.play(input);
  }

  #quitGame() {
    const weaponGrade = this.#upgradeGame.getWeaponGrade();

    OutputView.printFinalResult(weaponGrade);

    Console.close();
  }
}

module.exports = GameController;
