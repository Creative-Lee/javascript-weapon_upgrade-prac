const { Console } = require('@woowacourse/mission-utils');
const { BONUS_PROBABILITY } = require('../constants/condition.js');

const MSG_TEMPLATE = {
  start: '무기 강화 게임을 시작합니다.',

  weaponGrade(weaponGrade) {
    return `\n현재 강화 등급: +${weaponGrade}강`;
  },

  finalResult(weaponGrade) {
    return `\n최종 강화 결과: +${weaponGrade}강`;
  },

  miniGameResult({ gameType, isMatched, gameNumber }) {
    const gameTypeText = gameType === 'number' ? '숫자' : '홀/짝';
    const isMatchedText = isMatched ? '성공!' : '실패!';
    const bonusProbabilityText = isMatched ? `강화 확률 ${BONUS_PROBABILITY[gameType]}% 증가!` : '';

    return (
      `미니 게임 랜덤 수: ${gameNumber} --> ` +
      `${gameTypeText} 맞추기 ${isMatchedText}` +
      `${bonusProbabilityText}`
    );
  },

  upgradeResult(isUpgradeable, probability) {
    const isUpgradeableText = isUpgradeable ? '성공!' : '실패!';

    return `강화 ${isUpgradeableText} (강화 확률 ${probability}%)`;
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

  printMiniGameResult(result) {
    Console.print(MSG_TEMPLATE.miniGameResult(result));
  },

  printUpgradeResult(isUpgradeable, probability) {
    Console.print(MSG_TEMPLATE.upgradeResult(isUpgradeable, probability));
  },
};

module.exports = OutputView;
