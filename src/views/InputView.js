const { Console } = require('@woowacourse/mission-utils');

const REQUEST_MSG = {
  challenge: '강화 도전 여부를 입력해주세요. (도전: Y, 중단: N)',
};

const InputView = {
  readChallengeCommand(callback) {
    Console.readLine(REQUEST_MSG.challenge, callback);
  },

  // 미니 게임 숫자 혹은 커맨드
  readMiniGameInput() {},
};

module.exports = InputView;
