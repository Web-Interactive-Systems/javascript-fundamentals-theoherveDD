// TODO: Fix the errors in the functions below!

const functions = {
  // Computes the total order of a command
  // Rule: if total order is > 1000 the shipping is free
  orderTotal(order) {
    let totalOrder = 0;

    order.items.forEach((element) => {
      if (element['name'] !== 'Tax') {
        totalOrder = totalOrder + element['price'] * element['quantity'];
      } else {
        shippingPrice = element['price'];
      }
    });

    if (totalOrder <= 1000) {
      totalOrder = totalOrder + shippingPrice;
    }
    return totalOrder;
  },

  addPositive(array) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    let sum = 0;
    array.forEach(element => {
      if (element > 0){
        if (typeof(element) == "string") {
          element = Number(element);
          sum = sum + element;
        }
        else {
          sum = sum + element;
        }
      }
    });
    return sum;
  },

  // Takes a string, find the first consecutively repeating character in it and return the last index of the repeated character. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'
  repeatingCharacter(string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    // for (let i = 0; i < string.length - 1; i++)
    // let prevElement = "";
    // let result = 0;
    // let characters = string.split('');

    // for (let i = 0; i < characters.length; i++){

    //   if (prevElement == characters[i]){
    //     result = i-1;
    //   }
    //   else {
    //     prevElement = characters[i];
    //   }
    // }

    // return result;

    let index = -1;
    string = string.toUpperCase();
    for (let i = 0; i < string.length-1; i++) {
      if (string[i] === " "){
        continue;
      }
      if (string[i] === string[i + 1]) {
        index = i+1;
        break;

      }

    }



    return index;
  },

  // Takes an array of 1's and 0's, find the maximum number of consecutive 1's
  // in this array. If there is any value other than 1 or 0 in the array,
  // this is an error, return -1. The 1's and 0's may be either string or
  // integer values, both are acceptable and should be considered equivalent
  maxOneNumber(array) {
    let maxCount = -1;
    let currentCount = -1;


    // for (let i = 0; i < array.length; i++) {
    //   if (i == 1 && i === i+1){
    //     currentCount = currentCount + 1;
    //   }
    //   if (currentCount > maxCount){
    //     maxCount = currentCount;
    //   }
    // }

const cb = (e) => {
  if (e === 1) {
    currentCount++;
  }
  if(e !== 1 || e !== 0) {
    maxCount = -1;

  }
  else {
    maxCount = max(currentCount, maxCount);
    currentCount= 0
    return false;
  }
}



    //
    // Todo

    return 5;
  },
};

module.exports = functions;
