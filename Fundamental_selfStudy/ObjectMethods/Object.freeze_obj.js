/*The Object.freeze() method freezes an object.
 A frozen object can no longer be changed; freezing an object prevents new properties from being added to it,
  existing properties from being removed, prevents changing the enumerability, configurability, 
  or writability of existing properties, and prevents the values of existing properties from being changed. 
  In addition, freezing an object also prevents its prototype from being changed. 
  freeze() returns the same object that was passed in.
*/

//"use strict";
const user1 = { fname: "sohyel", lname: "rahgozar", age: 30, student: true };

Object.freeze(user1);
console.log(Object.isFrozen(user1)); //=> will return true
user1.fname = "new Soheyl"; // wont change or on strict mode will throw an error
//TypeError: Cannot assign to read only property 'fname' of object '#<Object>'
console.log(user1);
