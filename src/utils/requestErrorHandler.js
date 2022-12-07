const { Console } = require('@woowacourse/mission-utils');

const requestErrorHandler = (validate, input) => {
  try {
    validate(input);
    return true;
  } catch ({ message }) {
    Console.print(message);
    return false;
  }
};

module.exports = requestErrorHandler;
