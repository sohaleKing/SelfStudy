//variable declaration  ==> var.. let ..const
//=================================================================================

// var declarations are globally scoped while let and const are block scoped.
console.log(a); //now it will define undefined! beacuse at the moment it was undefined!
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined,
//if you used let a = 10 it returns error!!
var a = 10;
//another example of being global!!!
//global variable are outside the function and on the main scope but local are inside!
function func() {
  b = 10; //if you dont put any var let const it consider as global! but you need to call this function
  //to let the interptrter to get inside the body!!
}
func();
console.log(b);

// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared;
// const variables can neither be updated nor re-declared.
const c = 10;
// c = 20;   you wont be able to change it!! unless its an array or object you would be able to modify the value
console.log(c);

const obj = {
  name: "soheyl",
};
obj.name = "new name";
console.log(obj);
// While var and let can be declared without being initialized, const must be initialized during declaration.
let x; //you can leave it like this without initializing
const y = undefined; //you need to initizied! you cant leave it like const y
