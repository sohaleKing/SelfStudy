const solution = (arr) => {
  let max = 0;
  let counter = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === max) {
      counter++;
    }
  }
  if (max === counter) {
    return counter;
  }
  return 0;
};
console.log(solution([1, 2, 2]));
