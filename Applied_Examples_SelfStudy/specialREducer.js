const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Using .reduce()   find the "special" sum of these number in the following manner 1-2*2+3*3-4*4+5*5-6*6+7*7...
// use the modulus (remainder) operator % to determine if the current element is even or odd

// taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const reducer = (previousValue, currentValue) => {
  if (currentValue % 2) {
    console.log(
      `EVEN===> previous = ${previousValue} & current = ${currentValue} & return = ${
        previousValue + currentValue * currentValue
      }`
    );
    return previousValue + currentValue * currentValue;
  } else {
    console.log(
      `ODD===>previous = ${previousValue} & current = ${currentValue} & return = ${
        previousValue - currentValue * currentValue
      }`
    );
    return previousValue - currentValue * currentValue;
  }
};
console.log("Z=", arrOfNumbers.reduce(reducer));

// if implemented correctly, you should get -78 as the answer

/* const reducer = (previousValue, currentValue) => previousValue + currentValue; */
