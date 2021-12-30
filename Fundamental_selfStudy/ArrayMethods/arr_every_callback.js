//The every() method tests whether all elements in the array pass the test implemented by the provided function.
//It returns a Boolean value.
//it has to return true to all element to make the final every true
//============================================
//=======syntax======
//arr.every(callback)  and that callback must have return like ()=>{return condition}

const array = [6, 10, 14, 22, -24, 30, 2];

console.log(
  "is even?",
  array.every((x) => {
    return x % 2 === 0; //you have to give it a return,
    //if you dont put return will always be false since undefine is a falsy
  })
);
console.log(
  "is positive? ",
  array.every((x) => {
    return x > 0;
  })
);

const array2 = [30, 6, 42, 60, 12];
const dividableBy6 = (elem) => {
  return elem % 6 === 0;
};
console.log("dividable by 6?", array2.every(dividableBy6));
//===========================================
/*
The arr.every(calback) method executes a function for each array element.
returns true if the function returns true for all elements.
returns false if the function returns false for one element.
does not execute the function for empty elements.
does not change the original array
*/
