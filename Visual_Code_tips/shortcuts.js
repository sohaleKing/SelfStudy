//https://code.visualstudio.com/docs/editor/codebasics
//to see all the shortcuts=> CTRL + k CTRL + S (press one after the other to see it or go manually here: file, preferences, shortcuts)
//you can modify your own shortkey specially for git commmands

//Select multiple variable
//============== ALT + CTRL + up/down =============
const arr1 = [];
const arr2 = new Array();

arr1.push(1);
arr1.push(2);
arr1.push(3);
arr1.push(4);
arr1.push(5);

//to select all arr1 and change them at once those are the steps:
//- add new cursor with ALT+click and click on each you want
//- or add new cursor by ALT + CTRL + up (if you adding the same postion another cursor up the current or ALT+CTRL+down if you need it down)
//just as an example you can change arr1 to arr2 in once
//to cancel the extra cursor only hit ESC
//=================CTRL + D ======================

/* `````````*/ arr2.push(5);
/* `````````````````````` */ arr2.push(6);
/* ``````````````````````````` */ arr2.push(8);
/* `````` */ arr2.push(3);
/* ````````````````````` */ arr2.push(9);
/* `````````````````````````````````````````````` */ arr2.push(2);

//here might be hard to use the previous method to add cursors since they are not aligned vertically
//this method it uses CTRL + D to select all the similar vaiable  (CTRL + D) this selection would be automatically from up to buttum
//to see the example change all the arr2 to arr1 to see

//to move a to different line ALT + up/down to get where you are going to go

console.log(arr1);
console.log(arr2);
//you can change the order by moving one up the other using (ALT + up/down)

//==============ALT + Shift + left/Right=========================
const multipleByTwo = (arr) => {
  const innerFunction = () => {
    let str = "Hello World";
    console.log(str);
    function innerInner() {
      console.log("hello hello");
    }
    innerInner();
  };
  innerFunction();
  return arr.map((element) => {
    return element * 2;
  });
};

console.log(multipleByTwo(arr2));

//ALT + Shift + left/Right  will select all the line inside the same frame- try it one the example above
