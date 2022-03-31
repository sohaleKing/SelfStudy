//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//https://24ways.org/2019/five-interesting-ways-to-use-array-reduce/

// returns a single value: the function's accumulated result.
// does not execute the function for empty array elements does not change the original array.
// arr.reduce(reducer_callbackFn, startingValue).
// reducer_callbackFn(Accumulator, currentItem_loop ) // accumulator=current combined value , current item in the loop
//callbackFn has a return otherwise returns undefined

//1- Adding numbers together=======================================================================
const arr1 = [8, 9, 2, 1, 10, 12, 3, 7];
//if you want to do it with forEach
// let sum = 0;
// arr1.forEach((x) => {sum+= x});
// console.log(sum);
let startingValue = 0;
console.log(
  "adding numbers = ",
  arr1.reduce((accumulated, current) => {
    return accumulated + current;
  }, startingValue)
); //=> adding numbers =  52

//2- combination of other methods! like fliter + forEach/map ======================================
//see the imported users array structure in import export folder!
const { users } = require("../importExport/exportedUser"); //if you just put users without distructing the users, it would be
//an imported the whole module.exports object not the only user array
//imagine thats the question: only show the names of users who are students

//with filter and map
// const user = users.filter((user) => {
//   return user.student === true;
// });
// const result = user.map((obj) => obj.name);
// console.log(result);
startingValue = []; //javascript is not typed so you can change the type
const merged_methods = users.reduce((accumulated, current) => {
  //better to call accumulated newArr
  if (current.student) {
    accumulated.push(current.name); //when you pass an empty array as starting value you can use push for accumlated
  }
  return accumulated;
}, startingValue);
console.log("student users are = ", merged_methods); //=> student users are =  [ 'Soheyl Rahgozar', 'Tannaz Zohourian' ]

//3 -creating markup(html) from an array ===========================================================
//imagine the previos question this time we want to have the names as a list
startingValue = "";
const merged_methods_markup =
  "<ul>" +
  users.reduce((accumulated, current) => {
    //better to call accumulated html
    if (current.student) {
      accumulated += "<li>" + current.name + "</li>";
    }
    return accumulated;
  }, startingValue) +
  "</ul>";
console.log("the list of student users = ", merged_methods_markup); //the merged_method_markup is ready to be injected to the DOM

//4- combining two source of data to an array
const { grades } = require("../importExport/exportedUser");
startingValue = [];
const combined_src_arr = users.reduce((accumulated, current) => {
  //better to name accumulated => newArr
  let _key = current.name.replace(" ", ""); //removing the space from name like Soheyl Rahgozar => SoheylRahgozar
  //BellaRose doesnt have any grade, we should fix if a user doesnt have grades, put it null!
  if (grades[_key]) {
    current.grade = grades[_key];
  } else {
    current.grade = null;
  }
  accumulated.push(current);
  return accumulated;
}, startingValue);

console.log("array of students with grades are = ", combined_src_arr);

//5- combining two source of data to an object=============================================================
startingValue = {};
const combined_src_obj = users.reduce((accumulated, current) => {
  //better to name accumulated => newObj
  let _key = current.name.replace(" ", "");
  if (grades[_key]) {
    current.grade = grades[_key];
  } else {
    current.grade = null;
  }
  accumulated[_key] = current;
  return accumulated;
}, startingValue);

console.log("obj of students with grades are = ", combined_src_obj);
