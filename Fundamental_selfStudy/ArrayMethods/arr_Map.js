//arr.map(callback) creates a new array from calling a function for every array element.
//calls a function once for each element in an array. does not execute the function for empty elements.
//does not change the original array. returns an array!

const arrOfTuples = [
  ["Kylie", "Dowd"],
  ["Christian", "Henderson"],
  ["Jane", "Alsop"],
  ["Wanda", "Parsons"],
  ["Stephanie", "Taylor"],
];

// Using .map()   convert arrOfTuples into an array of strings with the full name "arrOfStrFullName"

const arrOfStrFullName = arrOfTuples.map((elem) => {
  return `${elem[0]} ${elem[1]}`;
});
console.log(arrOfStrFullName);

const arr1 = [3, 12, 20, 10, 12, 13, 18, 90, 10];
const onlyEven = (num) => {
  if (num % 2 === 0) return num;
  return "not even!"; //for such a usage might be better to use filter
};
console.log(arr1.map(onlyEven));
//here we multiple each element by 2
console.log(arr1.map((x) => x * 2));
