//================The valueOf() method returns the array itself. like a copy! does not change the original array.
const arr1 = ["soheyl", "ali", "john", "nicole", "claudia"];
//its not a right way to clone, it will be the same as array! like a copy!!
const firstCopyArr1 = arr1.valueOf();
console.log(firstCopyArr1);

const secondCopyArr1 = [...arr1];
console.log(secondCopyArr1);
