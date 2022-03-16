const namesArr = [
  "soheyl",
  "giti",
  "tannaz",
  "giti",
  "BellaRose",
  "nima",
  "ahoo",
];

const namesObj = {};
//to have them all inside the an object you can assign a property by number or even by value like this :
// {soheyl: "soheyl", giti: "giti" and so on}

namesArr.forEach((elem) => {
  namesObj[elem] = elem;
});
console.log(namesObj);

const hasDuplicate = (arr) => {
  const seen = {};
  let hasDuplicate = false;
  arr.forEach((elem) => {
    if (seen[elem]) {
      //if you put seen.elem it wont take it as dynamic and will make only one property called elem
      hasDuplicate = true;
    }
    seen[elem] = elem;
  });
  return hasDuplicate;
};

console.log(hasDuplicate(namesArr));
