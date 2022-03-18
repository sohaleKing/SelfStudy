//arr.join(symbol) method returns an array as a string. does not change the original array.
//Any separator can be specified. The default is comma (,).
//Syntax => array.join(separator)

const arr1 = [1, 2, "soheyl", undefined, true, "rahgozar"]; //return would be string with new sperator when using join

console.log(arr1.join()); //it gives you a string with , as separator the same as arr.toString()
console.log(arr1.toString());
console.log(arr1.join(" ")); //space between

//toString is a method that you can find not only in Arrays, but in every object.
//join()  It behaves just like toString for Arrays, but you can also specify the separator:
//join its chanable!
arr2 = [5, 3, 8, 10, 7, 9, 14, 22, 5];
const evenNum = (num) => num % 2 === 0;
console.log(arr2.filter(evenNum).join("-")); //the final result is showing a string! join is chaned to filter()

const fullName = ["ali", "azar"];
console.log(fullName.join(" "));
