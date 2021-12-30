/*Rest syntax looks exactly like spread syntax. (...rest) In a way, rest syntax is the opposite of spread syntax.
Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements
and "condenses" them into a single element 
*/ //**************************************************** */
//in function ==> rest parameters and spread arguments
//******************************************************* */
const sum = (x, y, z) => {
  return x + y + z;
};
const numArr = [1, 2, 3];

//lets say you want to pass an array of more number to this! and you dont know the array length! you want
// to be flexible with number of arguments in sum function call--> to solve using ...spread
//=========spread Argument===============
console.log(sum(...numArr));
//now even if you add another element to numArr it wont throw an error! it just ignor the 4th one since isnide the
//function you defined only 3 parameteres --> to solve using ...rest

//==============rest Parameters==============
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
const sum2 = (...restParam) => {
  //unlitmited paramters
  total = 0;
  restParam.forEach((elem) => {
    //you can also use for loop since with rest collect all the argument in to one
    //array of arguments and you can iterate through the array
    total += elem;
  });
  return total;
};
console.log(sum2(1, 2, 3, 4));
//now lets say you need to have unlimited arguments this time
const spreadArray = [1, 2, 3, 6, 8, 20, 7, 2, 1, 10, 30, 15, 25, 70, 100];
console.log(sum2(...spreadArray));

//==============N.B==============
/*
rest parameters can have only one ...restParam =X=> not allowed sum2(...restparam1, restparam2) 
also has the rest to be at the end =>not allowed =X=> foo(...wrong, arg2, arg3) =>allowed=>foo(arg1, arg2, ...correct)
The arguments object is not a real array, while rest parameters are Array instances,
 meaning methods like sort, map, forEach or pop can be applied on it directly;
*/

//Quick to argument object:
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 7

  console.log(arguments[1]);
  // expected output: 10

  console.log(arguments[2]);
  // expected output: 1
}

func1(7, 10, 1);
