//The Object.keys() method returns an array of a given object's own enumerable property names,
// iterated in the same order that a normal loop would.

const object = { name: "soheyl", age: 30, student: true };

const arr_properties = Object.keys(object);
console.log(arr_properties); //=> [ 'name', 'age', 'student' ]
