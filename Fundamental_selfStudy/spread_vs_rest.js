// https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/
//JavaScript uses three dots (...) for both the rest and spread operators. but not the same. the opposite in fact
//the rest puts the rest of some specific user-supplied values into a JavaScript array.
//the spread syntax expands iterables into individual elements.
// You Cannot Use “use strict” Inside a Function Containing a Rest Parameter---outside is OK!

//============================...rest=========================
//Use rest to enclose the rest of specific user-supplied values into an array:
//means the rest of arguments would be gather in an array as you see in
//console.log = [ 'third', 'forth', 'fifth', 'sixth' ]
//The text after the rest operator references the values you wish to encase inside an array.
//You can only use it before the last parameter in a function definition.
const showRest = (first, second, ...theRest) => {
  console.log(theRest);
};

showRest("first", "second", "third", "forth", "fifth", "sixth");

//====================...spread===============================
//Use spread to expand an array’s items into individual arguments:
//means here we break down the array elements to our needed arguments

const showSpread = (firstName, lastName, company) => {
  console.log(`${firstName} ${lastName} is the owner of ${company}`);
};

showSpread(...["soheyl", "Rahgozar", "LuminSign"]);
