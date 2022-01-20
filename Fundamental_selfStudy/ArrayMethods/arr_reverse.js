//arr.reverse() only reverse the current order, only make it Descending if it was already Acsending by arr.sort() or other algorithim
//its chainable!
const arr1 = ["ali", "john", "kyle", "linda", "soheyl", "claudia"];
const arr2 = [7, 3, 12, 1, 5, 9, 2, 10, 100];

console.log(arr1.reverse());
console.log(arr1.sort().reverse()); //chained to sort()
