// The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties
// as non-configurable. Values of present properties can still be changed as long as they are writable.
//you can not add property, you can not delete a property, but still you are able to change the value
//with Object.freeze(obj) you wont be able to change the value even

//"use strict";
const user1 = { fname: "sohyel", lname: "rahgozar", age: 30, student: true };
Object.seal(user1);
console.log(Object.isSealed(user1)); //=> wil return true
user1.fname = "new Soheyl"; // you can change the user1 value but can not add or remove
delete user1.lname; //you cant delete the property -will throw an error on strict mode - "use strict"
//TypeError: Cannot delete property 'lname' of #<Object>
console.log(user1);
