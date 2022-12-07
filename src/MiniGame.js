const miniGameTypeChecker = require('./utils/miniGameTypeChecker.js');
const { GAME_COMMAND } = require('./constants/condition.js');

class MiniGame {
  #number;

  setNumber(number) {
    this.#number = number;
  }

  play(input) {
    const gameType = miniGameTypeChecker(input);
    let isMatched;

    if (gameType === 'number') {
      isMatched = this.#isMatchedNumber(input);
    } else {
      isMatched = this.#isMatchedCommand(input);
    }

    return { gameType, isMatched, gameNumber: this.#number };
  }

  #isMatchedNumber(input) {
    return this.#number === Number(input);
  }

  #isMatchedCommand(input) {
    const isOddCommand = input === GAME_COMMAND.odd;
    const isMatchedOddCommand = isOddCommand && this.#isOddNumber();
    const isMatchedEvenCommand = !isOddCommand && !this.#isOddNumber();

    if (isMatchedOddCommand || isMatchedEvenCommand) {
      return true;
    }

    return false;
  }

  #isOddNumber() {
    return this.#number % 2 === 1;
  }
}

module.exports = MiniGame;
