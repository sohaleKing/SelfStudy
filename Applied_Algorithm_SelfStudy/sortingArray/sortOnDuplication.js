const name1 = [
  "Soheyl",
  "Tannaz",
  "BellaRose",
  "Sasan",
  "Sasan",
  "Soheyl",
  "Tannaz",
  "Ahoo",
  "Ahoo",
  "Giti",
  "BellaRose",
  "Soheyl",
  "Tannaz",
  "Ahoo",
  "Soheyl",
  "Kiyan",
  "Soheyl",
  "Amir",
  "Amir",
];
const name2 = ["Soheyl", "Tannaz", "BellaRose", "ahoo", "Kiyan"];

const countDouplicated = (arr) => {
  const seen = {};
  arr.forEach((element) => {
    if (seen[element]) {
      seen[element]++;
    }
    if (seen[element] === undefined) seen[element] = 1;
  });
  return seen;
};

const objectArr = Object.entries(countDouplicated(name1));

const sortFunction = ([keyA, valueA], [keyB, valueB]) => {
  //you could do it with a, b then a[0], b[1] which are equal to key and value
  if (valueA === valueB) return keyA.localeCompare(keyB);
  //string1.localeCompare()
  //The localeCompare() method returns a number indicating whether a reference string comes before, or after,
  //or is the same as the given string in sort order
  return valueA - valueB;
};
//if you want to ignore uppercase lowercase you need to do let A = keyA.toUpperCase() or toLowerCase()
objectArr.sort(sortFunction);

//now its time to bring it back to array as it was but sorted and duplicated removed!

console.log("orginal array =", name1);
const result = new Array();
objectArr.forEach((x) => {
  result.push(x[0]);
});

console.log(`array after sort base on duplicated = ${result}`);
