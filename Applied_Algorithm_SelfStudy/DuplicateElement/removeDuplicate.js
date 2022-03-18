const array = [4, 3, 4, 3, 2, 3, 0, 1];

const removeDuplicate = (arr) => {
  const seen = {};
  const unique = [];
  arr.forEach((element) => {
    if (!seen[element]) {
      seen[element] = element;
      unique.push(element);
    }
  });
  return unique;
};
console.log(removeDuplicate(array));
