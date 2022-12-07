const { GAME_COMMAND } = require('./constants/condition.js');

const ERROR_MSG = {
  invalidChallengeCommand: '[ERROR] 유효하지 않은 도전 커멘드 입니다.',
};

class Validation {
  static challengeCommand(command) {
    const commands = [GAME_COMMAND.challenge, GAME_COMMAND.quit];

    if (!commands.includes(command)) {
      throw new Error(ERROR_MSG.invalidChallengeCommand);
    }
  }
}

module.exports = Validation;
