const { Console } = require('@woowacourse/mission-utils');

const MSG_TEMPLATE = {
  start: '무기 강화 게임을 시작합니다.',

  weaponGrade(weaponGrade) {
    return `\n현재 강화 등급: +${weaponGrade}강`;
  },

  finalResult(weaponGrade) {
    return `\n최종 강화 결과: +${weaponGrade}강`;
  },
};

const OutputView = {
  printGameStartMsg() {
    Console.print(MSG_TEMPLATE.start);
  },

  printWeaponGrade(weaponGrade) {
    Console.print(MSG_TEMPLATE.weaponGrade(weaponGrade));
  },

  printFinalResult(weaponGrade) {
    Console.print(MSG_TEMPLATE.finalResult(weaponGrade));
  },
};

module.exports = OutputView;
