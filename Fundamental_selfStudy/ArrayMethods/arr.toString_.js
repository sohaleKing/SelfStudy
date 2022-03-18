//=====================================================================================
//array.toString() converts an array to a string of (comma separated) array values.

const array1 = ["Ali", "Azar"];
console.log(array1.toString());
//==================================other examples=====================================

const array2 = ["Saul", true, 20, null, 0, "king", undefined, false, "", "end"];
//for undefined-null-empty string it would put noSpace two commas! like 20,,0
console.log(array2.toString());
//cant chain .join since the output is not an array(string)
//if you use join it would return as string (like toString) and also you can change the seperator

const array3 = ["Saul", ["king", ["hi", 2]], { status: false, text: "hello" }];
//this method only works on array! even if there are nested arrays included, it will return a flat string!! but
//when there is an object included,it will return [object object]
//result=> Saul,king,hi,2,[object Object]

console.log(array3.toString());
//base on the objects you might get thise error for each kind
const myFunc = (x) => x + 1;
console.log(myFunc.toString()); //its funny it return the same as function in string! its a complete string

//when you do the length on the string after arr.toString().length it consider comma in string length!
console.log(array1.toString().length); //A  l  i  ,  A  z  a  r = 8
console.log(myFunc.toString().length); //space will also consider, there would be no comma! but its almost impossible to calculate!

const myObject = { name: "ali Azar" };
console.log(myObject.toString().length); //the length would be alway [object object] length which is 15

const myDate = new Date();
console.log(myDate.toString()); //myDate supposted to be an object as a return since its new instance but
//in fact it will return the time as string!! not [object object]

//solution to object object would be JSON.stringify(obejct)
//################################
console.log(JSON.stringify(myObject));
