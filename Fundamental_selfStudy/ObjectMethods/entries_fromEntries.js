const obj = { name: "sohyel", age: 30, student: true };

const arrfromObj = Object.entries(obj);
console.log(arrfromObj); //=> [ [ 'name', 'sohyel' ], [ 'age', 30 ], [ 'student', true ] ]

const objfromArr = Object.fromEntries(arrfromObj);
console.log(objfromArr); //=> { name: 'sohyel', age: 30, student: true }
