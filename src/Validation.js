const { GAME_COMMAND } = require('./constants/condition.js');
const miniGameTypeChecker = require('./utils/miniGameTypeChecker.js');

const ERROR_MSG = {
  invalidChallengeCommand: '[ERROR] 유효하지 않은 도전 커멘드 입니다.',
  invalidMiniGameInputLength: '[ERROR] 미니 게임 입력의 길이가 올바르지 않습니다.',
  invalidMiniGameCommand: '[ERROR] 유효하지 않은 미니 게임 커멘드 입니다.',
};

class Validation {
  static challengeCommand(command) {
    const commands = [GAME_COMMAND.challenge, GAME_COMMAND.quit];

    if (!commands.includes(command)) {
      throw new Error(ERROR_MSG.invalidChallengeCommand);
    }
  }

  static miniGameInput(input) {
    const gameType = miniGameTypeChecker(input);
    const commands = [GAME_COMMAND.odd, GAME_COMMAND.even];

    if (!Validation.#isValidMiniGameInputLength(input)) {
      throw new Error(ERROR_MSG.invalidMiniGameInputLength);
    }

    if (gameType === 'command' && !commands.includes(input)) {
      throw new Error(ERROR_MSG.invalidMiniGameCommand);
    }
  }

  static #isValidMiniGameInputLength(input) {
    return input.length === 1;
  }
}

module.exports = Validation;
