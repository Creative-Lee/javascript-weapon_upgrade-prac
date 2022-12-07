const miniGameTypeChecker = (input) => {
  const isNumber = Number.isInteger(parseInt(input));

  if (isNumber) {
    return 'number';
  }

  return 'command';
};

module.exports = miniGameTypeChecker;
