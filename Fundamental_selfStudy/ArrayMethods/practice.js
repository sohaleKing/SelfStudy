const arr1 = [4, 3, 6, 18, 6, 12, 11, 5, 3, 6, 2, 2, 2, 11, 5];
const arr2 = ["soheyl", "giti", "tannaz", "giti", "BellaRose", "nima", "ahoo"];
const arr3 = [3, 4, 2, 2];
const arr4 = ["Bella", "Baram", "Bahram", "Baba"];

const removeDuplicate = (arr) => {
  const obj = {};
  arr.forEach((elem) => {
    obj[elem] = elem;
  });
  console.log(obj);
};
removeDuplicate(arr2);
