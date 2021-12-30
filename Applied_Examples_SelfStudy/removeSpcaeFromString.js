const str = "Soheyl Rahgozar";

//first approach==> using Array.from(str)

const newArr = [];
Array.from(str, (elem) => {
  if (elem !== " ") newArr.push(elem);
});
console.log(newArr);
