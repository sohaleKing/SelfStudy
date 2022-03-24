// The includes() method performs a case-sensitive search to determine whether one string may be found within another string,
// returning true or false as appropriate.
//Syntax=> str1.includes(str2) returns true or flase

const str1 = "my name is Soheyl Rahgozar and I am programmer";
const str2 = "Soheyl Rahgozar";

console.log(
  `the name "${str2}" ${
    str1.includes(str2) ? "exist" : "does not exist"
  } inside the sentense `
);
