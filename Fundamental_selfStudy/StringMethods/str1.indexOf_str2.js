//searches the entire calling string, and returns the index of the first occurrence of the specified substring
//return -1 if didnt find any
//all the string methods are case sensetive

const str1 = "I love Dogs and Cats but more Cats";
const str2 = "Cats";
const str3 = "horses";

console.log("what is first Cats index? ", str1.indexOf(str2)); //=> 16
console.log("what is first horses index? ", str1.indexOf(str3)); //=> -1

//str.lastIndexOf(str2) returns the last occuerence
console.log("what is first Cats index? ", str1.lastIndexOf(str2)); //=> 30
