// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    // Todo use typeof and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/thro
    if (typeof a === "number" && typeof b === "number"){
      return a + b;
    }

    throw Error('LOLOLLO');
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Todo: use Array/map
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    return array.map((x) => x * 2);
  },

  checkForBadWords(input) {
    // Todo: use Array/forEach and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    let grosMot = ['Oh merde!'];
    grosMot.forEach((item) => {
      if (item === input) {
        throw Error('No bad word please!');
      }
    });
  },

  nameOfWeekDay(index) {
    const jours = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    index = jours[index];
    return index;
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    arraySort = array.sort((a,b) => a-b);
    return arraySort;
  },

  createCounterFunction(input) {
    let count = input;

    const increment = () => {
      count++
      return count;
    }
    return increment;
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
      return `Hello ${name}. Are you well?`;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3
    callback(1, 2);
  },

  combineArrays(array1, array2) {
    return [...array1, ...array2];

  },

  promiseMeMoney() {
    return new Promise((resolve/*, reject*/) => {
      setTimeout(() => {
        return resolve('send message');
      }, "100");
    });
  }
};

module.exports = functions;
