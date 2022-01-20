// arr.reduce(reducer_callbackFn) executes a reducer function for array element.
// returns a single value: the function's accumulated result.
// does not execute the function for empty array elements does not change the original array.
// Syntax => arr.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//simple syntax => arr.reduce(callback) => needs a function as argument otherwise throw the error "undefined its not a function"

const arr1 = [1, 2, 3, 5, 6, 9, 10];
const totalSub = (total, num) => {
  return total - num; //if there is no return it will return undefined!
};

arr1.reduce(() => {
  console.log("hi"); //it will console 7 times "hi" since there are 7 elements in the array!!
});

console.log(
  arr1.reduce((total) => {
    return total - 5; //will take the first element(1) as total and substract for 6 more times * -5 (-30) to it and returns the result (-29)
  })
);

console.log(arr1.reduce(totalSub)); //will the take the first element as total(1) and substract the rest to it and return the result(-34)
console.log(
  arr1.reduce((total, elem) => {
    return total + elem; //reduce in fact its not only for substract and you can even use the sum(+36)
  })
);
//arr.reduce---->from left to right
//total= 1
//new total = 1-2=-1
//new total =-1-3=-4
//total = -4-5=-9
//total= -9-6=-15
//total = -15-9=-24
//total = -24-10 = -34 return the final result as -34

//-------------------------
//the whole point is there is a total which is the current value of the first element and will be a total on applying the operation
//for each other element, so you can even multiple the each other element to that total
console.log(
  arr1.reduce((total, num) => {
    return total * num; //=> 16200
  })
);

//===================arr.reduceRight==========
//The reduceRight() is the same concept as reduce but this method works from right to left.
//means the total would be the last element(10)
console.log(arr1.reduceRight((t) => t - 5)); //=>-20

console.log(arr1.reduceRight(totalSub)); //total would be from right 10 and each time substrct to other
//arr.reduceRight---->from right to left
//total= 10
//new total = 10-9 =1
//new total =1 - 6= -5
//total = -5-5= -10
//total= -10-3=-13
//total = -13-2= -15
//total = -15-1 = -16 return the final result as -16
