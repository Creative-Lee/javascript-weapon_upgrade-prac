const { Console } = require('@woowacourse/mission-utils');

const REQUEST_MSG = {
  challenge: '강화 도전 여부를 입력해주세요. (도전: Y, 중단: N)\n',
  miniGame:
    '\n미니 게임을 위한 숫자 또는 홀/짝 커맨드를 입력해주세요. ' +
    '(숫자: 0 ~ 9 사이의 수, 홀: O, 짝: E)\n',
};

const InputView = {
  readChallengeCommand(callback) {
    Console.readLine(REQUEST_MSG.challenge, callback);
  },

  readMiniGameInput(callback) {
    Console.readLine(REQUEST_MSG.miniGame, callback);
  },
};

module.exports = InputView;
