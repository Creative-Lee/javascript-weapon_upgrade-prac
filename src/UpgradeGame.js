const { isUpgraded } = require('./utils/UpgradeUtils.js');
const { PROBABILITY, BONUS_PROBABILITY } = require('./constants/condition.js');

class UpgradeGame {
  #weaponGrade = 0;
  #probability = PROBABILITY;

  getWeaponGrade() {
    return this.#weaponGrade;
  }

  getProbability({ isMatched, gameType }) {
    const toNextGrade = this.#weaponGrade + 1;
    let probability = this.#probability[toNextGrade];

    if (isMatched) {
      probability += BONUS_PROBABILITY[gameType];
    }

    return probability > 100 ? 100 : probability;
  }

  isUpgradeable(probability) {
    return isUpgraded(probability);
  }
}

module.exports = UpgradeGame;
