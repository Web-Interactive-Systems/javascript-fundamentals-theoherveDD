// TODO: Fix the errors in the functions below!

const functions = {
  // This function takes an array of numbers and returns a new array with each number squared.
  squareNumbers(numbers) {
    // square numbers;
    return numbers.map((x) => x * x);
  },

  // This function takes an array of strings and returns a new array with only the strings that contain the letter 'a'.
  filterStrings(strings) {
    // // filter
    // let filteredStringstab = []

    // const filteredStrings = strings;
    // filteredStrings.array.forEach(element => {
    //     if (element.includes('a')){

    //     }
    // });
    // return filteredStringstab;
  const isIncludeA = (str) => str.includes('a');
    return strings.filter(isIncludeA);
  },

  // This function takes an array of numbers and returns the sum of all the numbers in the array.
  sumReduceNumbers(numbers) {
    // if (numbers.length === 0) {
    //   const sum = 0;
    //   return sum;
    // }
    // else {
    //   const sum = 0;
    //   numbers.array.forEach(element => {
    //     sum = sum+element;
    //   });
    // }

return numbers.reduce((prev, curr) => prev + curr, 0) // pointeur sur cette notion la 
  
},

  // removes last element of an array and returns it
  helper1(array) {
    return array.pop();
  },

  // add one element to an array
  helper2(arr, newOne) {

    arr.push(newOne);
    return arr;

  },

  // removes first element from an array and returns a new array
  helper3(arr) {
    return arr.shift();
  },

// Add elements to the top of an array
helper4(arr, ...elements) {
  arr.unshift(...elements);  // Add the elements to the beginning
  return arr;  // Return the updated array
},


  // takes an array, a starting index, the number of elements to remove, and any number of additional items to insert into the array at the specified starting index
  helper5(arr, start, deleteCount, ...items) {
    return  arr.splice(start, deleteCount, ...items);
  },

  // takes an array and two indices (start and end) as parameters, and returns a new array containing the elements from the original array between the start and end indices (excluding the element at the end index)
  helper6(array, start, end) {
    return array.slice(start, end);
  },

  // concat two arrays
  helper7(arr1, arr2) {
    return   arr1.concat(arr2);
  },

  // see unit tests for helper8 function
  helper8(arr, element) {
    return arr.indexOf(element);
  },

  // see unit tests for helper9 function
  helper9(array, value) {
    array.forEach(element => {
      if (element === value) {
        value = true;
      }
    });
    return value;
  },

  // see unit tests for helper10 function
  helper10(array, callback) {
    return callback();
  },

  // see unit tests for helper11 function
  helper11(arr, predicate) {
    return predicate;
  },

  // takes an array arr and a callback function, and returns a boolean value indicating whether every element in the array satisfies the condition specified by the callback function
  helper12(arr, callback) {
    return arr.evey(callback);
  },

  // takes an array arr and a callback function, returns true if at least one element in the array satisfies the condition specified in the callback function
  helper13(arr, funcCallback) {
    return arr.some(funcCallback);
  },

// see unit tests for helper14 function
  helper14(arr, separator) {
    return arr.join(separator);
  },

  // takes an array of numbers and returns the sum of all the numbers in the array using forEach.
  

  sumEachNumbers(numbers) {
    const result = 0;
    numbers.forEach(element => {
      result = result + element;
    });
    return result;
  },

  // takes an array of numbers, multiplies each number by 2, and returns the sum of even numbers.
  sumDoubledEvenNumbers(numbers) {
    // filter even number... num % 2 === 0
    // double numbers
    // sum
    return 0;
  },
};

module.exports = functions;
