//prototype allows you to add new properties and methods to arrays.
//prototype is a property available with all JavaScript objects.
// Syntax =>  Array.prototype.newProperty = value  --> it can be also a method and a function body!

Array.prototype.last = function () {
  return this[this.length - 1];
};
//we added a new methods to array methods! pop, foreach all those are prebuild methods! we can have our own methods
arr1 = ["soheyl", "ali", "john", "ericka", "claudia", "nicole", "lexy"];

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
arr2 = [4, 3, 12, 8, 10, 7, 5, 1, 33];
console.log(arr2.evenLength());

Array.prototype.owner = "JavaScript"; //that will apply to any array!
console.log(arr1.owner);
console.log(arr2.owner);
//The length property sets or returns the number of elements in an array. its not a function!
console.log("arr length", arr1.length);
arr2.length = 12; //so it will expand the array size with new element of undefined!
console.log(arr2);
//to remove from arr2 =>
arr2.length = 2; //will keep only the first 2 elements
console.log(arr2);
