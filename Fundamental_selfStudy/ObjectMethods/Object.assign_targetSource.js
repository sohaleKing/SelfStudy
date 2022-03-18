//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
// It returns the modified target object.
//Syntax=> Object.assign(target, source)
const obj1 = { name: "soheyl", age: 30 };
const obj2 = { age: 38, student: true };

Object.assign(obj1, obj2);
console.log(obj1); //=> { name: 'soheyl', age: 38, student: true } it added the student preporty
console.log(obj2); //=> { age: 38, student: true }

//copy an object using assign --old school {...spread} is better way

//const obj3 = Object.create(null);
const obj3 = {};
Object.assign(obj3, obj1);
console.log(obj3);
