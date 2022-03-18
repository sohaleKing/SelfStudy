let str = "hello world";
let str1 = "dad";
let str2 = "i am a dad amai";
let str3 = "level level";
let str4 = "madam";
let str5 = "adda";

const strToArray = (str) => {
  return Array.from(str);
};

const removeSpace = (str) => {
  let _arr = strToArray(str);
  _arr.forEach((element, index, array) => {
    if (element === " ") {
      array.splice(index, 1);
    }
  });
  return _arr;
};

const isPalindrom = (str) => {
  let _arr = removeSpace(str);
  let _len = _arr.length;
  let _first = _arr.slice(0, _len / 2);
  let _second = _arr.slice(-_len, _len / 2);
  return _first.toString() === _second.toString();
  //to convert an array to string you have 1- arr.toString(), 2-arr.join(",") * JSON.stringfy is only for objects
};

console.log(isPalindrom(str3));

// const arr1 = ["s", "r"];
// const arr2 = ["s", "r"];
// console.log(arr1 === arr2); //=> since they are pointing on different refrence in the heap
