//======================================================
//======================================================
//===================ARRAY METHODS======================
//======================================================
//======================================================
const arr1 = [3, 2, 4, 5];
const arr2 = [22, 10, 7];
const arr3 = [8, 5, 33, 1];
const arr4 = ["soheyl", "tannaz", "BellaRose", "nikky", "tom"];
const obj1 = { fName: "soheyl", lName: "Rahgozar", age: 30, student: true };
const arrObj = [
  { id: 1, name: "soheyl", student: true },
  { id: 2, name: "tannaz", student: true },
  { id: 3, name: "bellaRose", student: false },
];
const arr5 = [4, 6, 10, 2];
const arr6 = [22, 4, 10, 7, 18, 14, 11, 30, 2, 20];
const arr7 = [100, -23, 22, -10, 12, -30];
const arr8 = [2, 20, 11, 20, 64, 21, 35, 95, 14, 46, 44, 85, 51, 12, 5, 9, 7];
const arrText = [
  "Hi world",
  "how are you",
  "my name is Soheyl Rahgozar",
  "end of the game",
];
const arr9 = [10, 12, 10, 15, 16, 10, 11, 10, 18, 19, 10, 14, 10];
const arr10 = [12, 15, 27, 19, 10, 22, 20, 24, 33, 33, 38, 38];
const booleanArray = [true, false, true, true, false, false];
const mixedArray = ["soheyl", 12, 15, "Rahgozar", "end", true, false];
const emptyArray = new Array();
const arr11 = [100, 12, 44, 32, 10, 150, 19, 8];
const nestedArray = [
  [2, 3, 10],
  [["soheyl", "tannaz"], true],
  [{ msg: "hello World", user: obj1 }, arr5],
];
//============array1.concat(array2, array3, ..., arrayX)================
const contact1 = arr1.concat(arr3, arr2); //result=> [3,2,4,5,8,5,33,1,22,10,7]
const contact2 = [...arr1, ...arr3, ...arr2];

//==============array.copyWithin(target, start, end)==================
arr1.copyWithin(1, 2, 3);
//result=> [3,4,4,5] overwrite the arr1 to newArr1

//=============arr.valueOf()===============
const arr1_copy = arr1.valueOf();
//result => [3,4,4,5] --> will copy the arr1 (remember arr1 changed on lines before)

//===============arr.entries()================
const newArryObject = arr4.entries();
//returns an iratable array not an object
// for (let index of newArryObject) {
//   console.log(`${index}`);
// } wont be able to see it only by console.log and need to do for..in
//result=> soheyl,0 \nextline\ tannaz,1, .....

//================arr.ever(callback)============
const isAllEven = (arr) => {
  return arr.every((x) => {
    return x % 2 === 0;
  });
};
//result=> true

//==================array.fill(value, start, end)===========
arr1.fill(1, 2, 3);
//result=> [3,4,1,5]

//==================array.filter(callback)=================
const greaterThan10 = (arr) => {
  return arr.filter((x) => {
    return x > 10;
  });
};
const smallerThan10 = (x) => {
  x < 10; //without return it returns an empty array
};

//console.log(greaterThan10(arr6));   //result=> [22,18,14,11,30,20]
//console.log(arr6.filter(smallerThan10)); //result => [4,7,2]

//===================array.find(callback)===================
const negative = (x) => x < 0;
const even = (x) => x % 2 === 0;
//console.log(arr7.find(negative));  //result=> -23
//console.log(arr7.find(even));   //result => 100
//console.log(arr1.find(negative));   //result => undefined

//===============arr.pop()===================
let item = arr8.pop();
//console.log(item);  //=>7
item = arr8.shift();
//console.log(item); //=>2
item = arr8.push(8);
//console.log(`${arr8} with length of ${item}`); //=> 20,11,20,64,21,35,95,14,46,44,85,51,12,5,9,8 with length 16
item = arr8.unshift(8);
//console.log(`${arr8} with length of ${item}`); //=> 8,20,11,20,64,21,35,95,14,46,44,85,51,12,5,9,8 with length 17
item = arr8.splice(1, 15, 2, 2, 2);
//console.log(item); //=> [20,11,20,64,21,35,95,14,46,44,85,51,12,5,9]
//console.log(arr8); //=> [ 8, 2, 2, 2, 8 ]

//=============arr.forEach(callback)===================
const showArrElem = (arr) => {
  arr.forEach((element) => {
    console.log(element);
  });
};
//showArrElem(arr4); //=> soheyl tannaz BellaRose nikky tom
const showArrElem_property = (array) => {
  array.forEach((element, index, obj) => {
    //only show me the object that element student is not true
    if (!element.student) {
      for (let key in obj[index]) {
        //console.log(`${key} = ${obj[index][key]}`); //=> id = 3 name = bellaRose student = false
      }
    }
  });
};
showArrElem_property(arrObj);

//=============arr.includes(full elment) ==================
const checkMyNameThere = (arr, name) => {
  arr.includes(name) && console.log("Yes, your name is there");
  !arr.includes(name) && console.log("No, cant find your name there");
};
//checkMyNameThere(arr4, "amir");

//==============arr.indexOf(item)====================
const checkItem = (arr, item) => {
  if (arr.indexOf(item) > -1) {
    console.log(`yes we find the item at position ${arr.indexOf(item) + 1} `);
  } else {
    console.log("couldnt find it");
  }
};
//checkItem(arr4, "tannaz"); //=> yes we find the item at position 2

//=============arr.lastIndexOf(item) =================
const removeTheLastDuplicated = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(array.lastIndexOf(array[j]), 1);
        console.log(array);
        return; //to exit the function
      }
    }
  }
};
//removeTheLastDuplicated(arr9); //=> [10, 12, 10, 15, 16, 10, 11, 10, 18, 19, 10, 14];

//=======================arr.findIndex(callback)====================
let firstFoundPosition = arr7.findIndex(negative);
//console.log(firstFoundPosition);

//===================arr.join("seperatorType")===================
let bigNumbers_arr7 = greaterThan10(arr7).join(" and ");
//console.log(bigNumbers_arr7); //=> 100 and 22 and 12

//=================arr.length=========================
//console.log(arr5.length);  //=> 4

//===================arr.map(callback)========================
const multiple = (arr) => {
  return arr.map((x) => {
    return x * 2;
  });
};
//console.log(multiple(arr2)); //=> [ 44, 20, 14 ]
const onlyEvenNumbers = (arr) => {
  return arr.map((num) => {
    if (num % 2 === 0) return num;
    return "ODD";
  });
};

//console.log(onlyEvenNumbers(arr3)); //=> [ 8, 'ODD', 'ODD', 'ODD' ]

//===============Array.prototype.newProperty = value =================
Array.prototype.typeOfArray = function () {
  if (this.length === 0) return "empty array";
  for (let i = 1; i < this.length; i++) {
    if (typeof this[0] !== typeof this[i]) return "No type";
  }

  switch (typeof this[0]) {
    case "string":
      return "Array of String";
    case "number":
      return "Array of Numbers";
    case "boolean":
      return "Array of Boleans";
  }
};
//console.log(mixedArray.typeOfArray()); //=> No type
//console.log(emptyArray.typeOfArray());  /=> empty array
//console.log(arr2.typeOfArray()); //=> Array of Numbers

//==================arr.some(callback)==================
const anyNegetive = (arr) => {
  return arr.some((num) => {
    return num < 0; //you need return here otherwise you get all false!!
  });
};
//console.log(anyNegetive(arr7)); //=>true
//console.log(anyNegetive(arr3)); //false

//==============arr.reverse()=====================
//console.log(arr4.reverse()); //reverses the current order(not always Decsending) \\=> ['tom','nikky','BellaRose','tannaz','soheyl']

//==================arr.sort()=====================
//console.log(arr4.sort().reverse()); //sorts Ascending always and you chained reverse \\=> ['tom','tannaz','soheyl','nikky','BellaRose']
//so the result is descending! for array of number make sure you use the arguments otherwise 100< 12
const sortArgument = (a, b) => {
  return a - b;
};
//console.log(arr11.sort()); // [10,100,12,150,19,32,44,8]
//console.log(arr11.sort(sortArgument)); //[8,10,12,19,32,44,100,150]

//=============arr.slice(start,end)====================
const cutInHalf = (arr) => {
  if (arr.length % 2 === 0) {
    return arr.slice(0, arr.length / 2);
  } else return "array is not cutable in half";
};
//console.log(cutInHalf(arr3)); //=> [ 8, 5] the orginal was [ 8, 5, 33, 1 ]

//============Array.from(obj)===================
let str = "soheyl";
//console.log(Array.from(str)); //=> result would be an array = [ 's', 'o', 'h', 'e', 'y', 'l' ]

//==========Array.isArray(arr)=================
const checkInputIsArray = (input) => {
  return Array.isArray(input);
};
// console.log(checkInputIsArray(obj1)); //=> false
// console.log(checkInputIsArray(arrObj)); //=>true

//=================arr.toString()==============
const turnToString = (input) => {
  let str = Array.isArray(input)
    ? input.toString()
    : "the input is not an array!";
  if (str.includes("[object Object]")) return "array includes object!";
  // JSON.stringify(str[str.search("[object Object]")]);
  return str;
};
//console.log(turnToString(obj1)); //the input is not an array!
//console.log(arr10.toString()); //=> 12,15,27,19,10,22,20,24,33,33,38,38 as string!!
//console.log(turnToString(nestedArray)); //=>2,3,10,soheyl,tannaz,true,[object Object],4,6,10,2 => final => array includes object!

//============delete array====================
delete arr1[0];
//console.log(arr1); //=> [ <1 empty item>, 4, 1, 5 ] so it better to use shift in this case!

//=============arr.reduce / arr.reduceRight==================
const subr = (total, num) => {
  return total - num;
};
//console.log(arr5.reduce(subr)); //=> -14
//console.log(arr5.reduceRight(subr)); //=>-18
//======================================================
//======================================================
//====================Fundamental=======================
//======================================================
//======================================================

//==============forLoop=====================
for (let i = 0; i < arrObj.length; i++) {
  //console.log(arrObj[i].name);
}
for (let key in arrObj) {
  //console.log(arrObj[key].name);
}
for (let index of arrObj) {
  //console.log(index.name);
}
