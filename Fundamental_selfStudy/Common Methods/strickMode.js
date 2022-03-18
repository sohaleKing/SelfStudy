/*You can use strict mode in all your programs. or you can put it only inside a function!!
 It helps you to write cleaner code, like preventing you from using undeclared variables. */

"use strict";
function sample() {
  x = 2;
  console.log(x);
}
//if you comment "use strict" it will console number 2 but now it will throw an error!

sample();

// You Cannot Use “use strict” Inside a Function Containing a Rest Parameter
