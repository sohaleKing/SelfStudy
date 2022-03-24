const str = "Soheyl Rahgozar";

//first approach==> using Array.from(str)

const newArr = [];
Array.from(str, (elem) => {
  if (elem !== " ") newArr.push(elem);
});
console.log(newArr);

//second apporach ==> using regular expression

const removeSpace = (arr) => {
  let _str = arr.toString();
  return _str.replace(/\s|[,]/g, ""); // that | means or!! so it will remove space or comma!
};

console.log(removeSpace(str));

const arr1 = ["hi this is ", "a word"];

console.log(removeSpace(arr1));
