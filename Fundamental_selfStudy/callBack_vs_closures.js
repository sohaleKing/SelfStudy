//==============callback=================
//A callback function is a function passed into another function as an argument,
//like setTimeout(callback, time), arr.every(callback), arr.forEach(callback) , .......

setTimeout(() => console.log("firstCallback after 2sec"), 2000); //or you can move the function argument outside the setTimeout
// the same for addEventListener .... since they accept a function refrence as an argument but for a normal
//function you cant use like this and you need to call inner function inside the outer functio

const printCallback = (callback) => {
  callback("second callback");
};
const printAction = (x) => console.log(x);

printCallback(printAction); // pass inner function as an argument! and you have already call that inner function inside the outer

//============== closures ============
//inside a function you return another function
//a closure gives you access to an outer function’s scope from an inner function
// you return a function inside an outer function
//there is an inner function return, in callback there is an inner function call ************

const printClosure = (x) => {
  return () => {
    console.log(x);
  };
};
let firstPrint = printClosure("fist closures");
firstPrint();
let secondPrint = printClosure("second closure");
secondPrint();
// and of course the best usage would be with functions like setTimeout or addEventListener
//who call the arguments them self! means combination of those callback and closures

setTimeout(printClosure("callback and closures together after 5sec"), 5000);
//or even like this callback(closure())
printCallback(
  printClosure(
    "combination of a callback and closure!! but its better just pass a function refrence not a function call"
  )
);
