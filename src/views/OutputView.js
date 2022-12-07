const { Console } = require('@woowacourse/mission-utils');

const MSG_TEMPLATE = {
  start: '무기 강화 게임을 시작합니다.',
};

const OutputView = {
  printGameStartMsg() {
    Console.print(MSG_TEMPLATE.start);
  },
};

module.exports = OutputView;
