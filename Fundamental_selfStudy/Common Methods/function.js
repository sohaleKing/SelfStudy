//==================First Way=========================

const func1 = function () {
  console.log("first function");
};

let show = func1;
//you can decalre a new variable and assign it to that function refrence and use it
//or any time the same print_to_console(user) is ready to call!!
show();

//======================Second Way=========================
//Arrow function
const func2 = () => {
  console.log("arrow function");
};
func2();

//=====================3rd way ================
function func3() {
  console.log("straint function");
}
func3();

//====================closure ===================
const outerFunc = () => {
  let text = "hello world from closure";
  const innerFunc = () => {
    console.log(text);
  };
  return innerFunc;
};
const show2 = outerFunc();
show2();
//in fact inside the outer function body you return another function refrence which exist as an inner
//function inisde the outer body, then need to assign a new variable to outerfunction call evaluation (which
// returns the inner function and call that one at the end)
const outerfunc2 = function (x) {
  return function () {
    console.log(x);
  };
};
const show3 = outerfunc2("hello world from inner function");
show3();
//here you return right away a function which excute the outer function parameter
//then assign the outerfunction call with a new argument and call it outside it
/* *************syntax**********
let outer_function(param) {
  return function() {
    console.log(param)
  }
}
let newFunc = outer_function (argument)
newFunc()
*/

//==========================callback===================

const MessageFunc = (callback) => {
  let msg = "hello from callback";
  callback(msg);
};
const showMessage = (x) => {
  console.log(x);
};
MessageFunc(showMessage);

/* that might be a syntax
let function1 = (callback) => {
  var = value  
  callback(var)
}
let functio2 = (x)=>{
  console.log(x)
}
function1(function2)

in fact it would be this:
*/
let message2 = (callback) => {
  let msg = "hello from callback2";
  callback(msg);
};

message2((x) => {
  console.log(x);
});
