//================The valueOf() method returns the array itself. like a copy! does not change the original array.
const arr1 = ["soheyl", "ali", "john", "nicole", "claudia"];

const firstCopyArr1 = arr1.valueOf();
console.log(firstCopyArr1);

const secondCopyArr1 = [...arr1];
console.log(secondCopyArr1);
