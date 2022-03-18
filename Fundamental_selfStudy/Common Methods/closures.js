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

const lexical = () => {
  let name = "Lexical"; // name is a local variable
  const printName = () => {
    // printName() is the inner function, a closure
    console.log(name); //use variable declared in the parent function
  };
  printName();
};
lexical();

//Closure
// This environment consists of any local variables that were in-scope at the time the closure was created
const closure = () => {
  let name = "closure";
  const printName = () => {
    console.log(name);
  };
  return printName;
};

let myFunc = closure();
myFunc();

const closureParam = (param) => {
  const printName = () => {
    console.log(param);
  };
  return printName;
};

const msg1 = closureParam("closure with param");
msg1();

//A closure gives you access to an outer function’s scope from an inner function.

const closureParam2 = (param) => {
  return function () {
    console.log(param);
  };
};
let msg2 = closureParam2("closure with param2");
msg2();

const closureParam3 = (name) => {
  return function () {
    console.log(name);
  };
};
const showName = closureParam3("soheyl");
showName();

/*
ClosureSyntax ==> 
const outerFunc =(param)=>{
  let _privateVaribale = param
  return innerFunc(){
    //do some action on _privateVariable
  }
} 
const closureActioner = outerFunc(init)
closureActioner()
*/
