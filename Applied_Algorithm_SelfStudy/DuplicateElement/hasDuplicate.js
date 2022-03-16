const num1 = [4, 5, 23, 4, 5, 10, 10, 23, 4, 5, 10, 4, 33];
const num2 = [4, 5, 23, 10, 33];

const hasDuplicate = (arr) => {
  const seen = {};
  let hasDuplicate = false;
  arr.forEach((element) => {
    if (seen[element]) hasDuplicate = true;
    seen[element] = element;
  });
  return hasDuplicate;
};

console.log(hasDuplicate(num1)); //=> true
console.log(hasDuplicate(num2)); //=> false
