/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript,
closures are created every time a function is created, at function creation time.
*/
/*
Lexical scoping (static scoping) may only be called (referenced) from within the block of code in which it is defined (private variable).
The opposite is dynamic scoping which creates variables that can be called from outside the block of code
in which they are defined (public variable)
*/

//Lexical Scoping(static)

const lexical_Func = () => {
  let name = "Soheyl"; // name is a local variable
  const printName = () => {
    // printName() is the inner function, a closure
    console.log(name); //use variable declared in the parent function
  };
  printName();
};
lexical_Func();

//Closure
// This environment consists of any local variables that were in-scope at the time the closure was created
const closure_Func = () => {
  let name = "Rahgozar";
  const displayname = () => {
    console.log(name);
  };
  return displayname;
};

let myFunc = closure_Func();
myFunc();

//A closure gives you access to an outer function’s scope from an inner function.

const closure2 = (param) => {
  return function () {
    console.log(param);
  };
};
let msg1 = closure2("Hi from closure2");
msg1();
