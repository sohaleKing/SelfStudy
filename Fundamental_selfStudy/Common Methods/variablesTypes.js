//In JavaScript, a variable may store two types of values: primitive and reference.
//------------------------------------------------------------------------------------
/*  Primitive values : JavaScript provides six immutable values (that is, values which can't be changed)
    Primitive types as undefined, null, boolean, number, string, and symbol
    A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.
*/

let var1; // create a variable but assign it no value
console.log("Var1 = ", var1); // logs "var1's value is undefined"

const var2 = null; // The value null represents the intentional absence of any object value
console.log("Var2 = ", var2);

const var3 = true; // Boolean represents a logical entity and can have two values: true OR false
console.log("Var3 = ", typeof var3);

const var4 = 100; // in JavaScript we also have three symbolic values +Infinity, -Infinity, and NaN ("Not a Number")
console.log("Var3 = ", typeof var4);

const var5 = "McGill";
console.log("Var3 = ", typeof var5);

//Reference values
const obj = { property1: "value", property2: "value", property3: "value" };
const arr = ["elem1", "elem2", "elem2"];
const method = function () {
  console.log("object = ", obj);
  console.log("Array = ", arr);
};
method(); //function call

/* Primitive values vs. Reference values
    The size of a primitive value is fixed, therefore, JavaScript stores the primitive value on the stack. On the other hand,
    the size of a reference value is dynamic so JavaScript stores the reference value on the heap.
    primitive value is accessed by value so when you access the variable, you manipulate the actual value stored in that variable.
    Unlike a primitive value, when you manipulate an object or array, you work on the reference rather than the actual object or array.
 */

let a = 100; // number
let b = "giti"; //string
let c = true; //boolean
let d = null; //null
let e; //undefined   hanooz vojood nadare!!!!!!!!

//assignment  ==> change
a = 200;

console.log("a = ", a);
console.log("b = ", b);
console.log("c = ", c);
console.log("d = ", d);
console.log("e = ", e);
