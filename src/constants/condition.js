const MINI_GAME_NUM = {
  lowerInclusive: 0,
  upperInclusive: 9,
};

const GAME_COMMAND = {
  challenge: 'Y',
  quit: 'N',
  odd: 'O',
  even: 'E',
};

const PROBABILITY = {
  1: 80,
  2: 70,
  3: 60,
  4: 50,
  5: 45,
  6: 40,
  7: 35,
  8: 30,
  9: 20,
  10: 10,
};

const BONUS_PROBABILITY = {
  number: 50,
  command: 10,
};

module.exports = {
  MINI_GAME_NUM,
  GAME_COMMAND,
  PROBABILITY,
  BONUS_PROBABILITY,
};
