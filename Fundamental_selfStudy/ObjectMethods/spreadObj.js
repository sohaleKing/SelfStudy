//Spread syntax (...)
//1- myFunction(...iterableObj); // pass all elements of iterableObj as arguments to function myFunction
//2- For array literals: //combine two arrays by inserting all elements from iterableObj
const arr_iterableObj = ["hello", "world", 20, true];
const str_iterableObj = "newWorldOrder";

const Merged1 = [...arr_iterableObj, 5, "end", false];
console.log(Merged1);
//copy array
//with assignment you wont be able to copy an object on an array! the only ways are using forLoops or ...spread
const arr = [4, 3, 2];
const arr_wrong_copy = arr;
const arr_right_copy = [...arr];
arr[0] = 1;
console.log(arr_wrong_copy);
console.log(arr_right_copy);

//clone an object using ...spread
const person = { name: "soheyl", grade: 80, student: true };
const persone_wrong_copy = person;
const person_right_copy = { ...person };
const person_right_copy_oldSyntax = Object.assign({}, person);
person.name = "newName";
console.log(persone_wrong_copy);
console.log(person_right_copy);
console.log(person_right_copy_oldSyntax);

/******************** merge two objects!******************/
const person_ExtraInfo = { gender: "male", age: 36, status: undefined };

const person_fullInfo = { ...person, ...person_ExtraInfo };
//const person_fullInfo = Object.assign(person, person_ExtraInfo); //old syntax
console.log(person_fullInfo); // it will show all of them together

//its intresting you can change the status
//If objects have a property with the same name, then the right-most object property overwrites the previous one
const person_newStatus = { status: "married" };
const person_newFullInfo = {
  ...person,
  ...person_ExtraInfo,
  ...person_newStatus,
}; //or ==> const persone_newFullInfo = {...person_fullInfo, ...personNewStatus}
console.log(person_newFullInfo);
/* Both the spread operator ( ...) and Object.assign() method perform a shallow merge.
 It means that if an object has a property that references to another object, the property
  of the original object and result target object will reference the same object. */

const team1 = {
  name: "Red Socks",
  players: [{ name: "ali" }, { name: "mike" }],
  members: 2,
  openMondays: false,
};
const team2 = {
  name: "Blue Socks",
  players: [{ name: "ali" }, { name: "mike" }],
  members: 2,
  openMondays: true,
};
const team3 = { ...team1 };
console.log(team1.players === team3.players);
