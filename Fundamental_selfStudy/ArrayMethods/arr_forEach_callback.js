//arr.forEach(callback) => executes a provided function(callback) once for each array element.
//it returns undefined when you assigned it and  is not chainable
//callbackFn = Function to execute on each element.
arr1 = ["first", "second", "third", "forth", "fifth"];
// Using .forEach()   console.log each element of newArr
arr1.forEach((elem) => {
  console.log(elem);
});

function plusOne(param) {
  console.log(++param);
  //post increment (i++) means return/use i then add one to i while
  //pre increment (++i) means add one to i before any action(return/use)
  //so in that case if it was param++ it show the same as argument not anything added!!
}

//plusOne(4); will show 5

arr2 = [4, 5, 10, 7, 12, 55, 1];
arr2.forEach(plusOne);
console.log(arr2); //as you see the orginal array hasnt changed!
//but we are able to delete the item from the array or modified them like this:

arr2.forEach((elem, index, array) => {
  elem % 2 === 0 && array.splice(index, 1); //when you see an even number remove it!
  //but just as an example of modifiy the original array!!
  //**********************arr.forEach((item, index, object)=>{do something on object[index]}) ********************/
});
console.log(arr2);

arr2.forEach((elem, index, obj) => {
  if (elem > 10) obj[index] = 0; //if its greater than 10 change it to 0
});
console.log(arr2);
//===========forEach syntax=============
// array.forEach(callback) => will aply on every single element!!
// array.forEach itself returns undefined! but will apply the callback function on every single element!

arr2.forEach((elem, index, arr) => {
  if (elem === 0) {
    arr.splice(index, 1, 100, 100, 100);
  }
});
console.log(arr2);
