const name1 = [
  "Soheyl",
  "Tannaz",
  "BellaRose",
  "sasan",
  "sasan",
  "Soheyl",
  "Tannaz",
  "ahoo",
  "ahoo",
  "giti",
  "BellaRose",
  "Soheyl",
  "Tannaz",
  "ahoo",
  "Soheyl",
  "Kiyan",
];
const name2 = ["Soheyl", "Tannaz", "BellaRose", "ahoo", "Kiyan"];

const countDuplicate = (arr) => {
  const seenCounter = {};
  arr.forEach((element) => {
    if (seenCounter[element]) {
      seenCounter[element]++;
    } else {
      seenCounter[element] = 1;
    }
  });
  return seenCounter;
};

console.log(
  `number of duplication for each name on name1 = ${JSON.stringify(
    countDuplicate(name1)
  )}`
);

console.log(
  `number of duplication for each name on name2 = ${JSON.stringify(
    countDuplicate(name2)
  )}`
);
