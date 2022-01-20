//prototype allows you to add new properties and methods to arrays.
//prototype is a property available with all JavaScript objects.
// Syntax =>  Array.prototype.newProperty = value  --> it can be also a method and a function body!
const arr1 = ["soheyl", "ali", "john", "ericka", "claudia", "nicole", "lexy"];
const arr2 = [4, 3, 12, 8, 10, 7, 5, 1, 33];

Array.prototype.last = function () {
  return this[this.length - 1];
};
//we added a new methods to array methods! pop, foreach all those are prebuild methods! we can have our own methods

console.log(arr1.last());

//or making for the first!
Array.prototype.first = function () {
  return this[0];
};
console.log(arr1.first());

//we made our customized pop() called last() which returns the last element without modifying the original array
//the same for first and the others
console.log(arr1);

//a custome function which change the original array to an array of only the first letter and index number
Array.prototype.myFunc = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].charAt(0).toUpperCase() + i;
  }
};
arr1.myFunc();
console.log(arr1);

Array.prototype.evenLength = function () {
  let evenLength = 0;
  for (let i = 0; i < this.length; i++) {
    this[i] % 2 === 0 && evenLength++;
  }
  return evenLength;
};

console.log(arr2.evenLength());

Array.prototype.owner = "JavaScript"; //that will apply to any array!
console.log(arr1.owner);
console.log(arr2.owner);
