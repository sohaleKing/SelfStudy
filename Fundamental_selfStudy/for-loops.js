//for(let indx; end; step by indx)
//while(condition) {do something}
//do(something) while(condition)
//for(let indx of arr) {do something on indx}  //only works on array
//for(let key in obj) {do something on obj[key]} //better for objects

array = ["A", "B", "C", "D"]; //array are kind of object too
object = { fistName: "soheyl", lastName: "Rahgozar", age: 38, student: true };

//===================FOR IN========================(ARRAY & OBJECT)
// By index => for(index in array) {do something on arr[index]}
for (let currentIndex in array) {
  //console.log(currentIndex)
  console.log(array[currentIndex]); //need to use index and obj to get access
}
//for (key in object) {do something on object[key]}
for (key in object) {
  console.log(`${key} : ${object[key]}`);
}

//=====================FOR OF======================(ONLY ARRAY)
// By item => for(item of array) {do something on item}
for (let currentItem of array) {
  console.log(currentItem);
}
//for(key of object) {do something on key}
// for (key of object) {
//   console.log(key);
// }

/*Do not use for in over an Array if the index order is important
//array values may not be accessed in the order you expect.
It is better to use a for loop, a for of loop, when the order is important. */
//example of bad usage of for...in when order matters
const newArray = [];
newArray[4] = 100; //Perfectly legal JavaScript that resizes the array.
//means put the 5th element of the array to 100, but the rest are still undefined!
for (let indx in newArray) {
  console.log(newArray[indx]);
} //it only show 100 not any undefined!! but in fact that is like [ <4 empty items>, 100 ]
//if you use the forEach it would have the same behavior but for...of it works fine!
//of course the for(start, end, step) also always a right option!

for (let item of newArray) {
  //only usable for array!!
  console.log(item);
}

/*
for (let key of object) {
  // for...of its only iterable on array not on object!!
  console.log(key); //will through an error!
}
*/
