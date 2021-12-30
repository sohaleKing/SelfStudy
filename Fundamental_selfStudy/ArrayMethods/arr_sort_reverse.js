//arr.sort() sorts the elements of an array. overwrites the original array.
//as strings in alphabetical and ascending order. even for the number is alphabetical, be carful 100 < 2
const arr1 = ["ali", "john", "kyle", "linda", "soheyl", "claudia"];
const arr2 = [7, 3, 12, 1, 5, 9, 2, 10, 100];

console.log(arr2.sort());

//arr.reverse() reverses the order of the elements in an array. overwrites the original array.
console.log(arr1.reverse()); //it just reverse the exisiting order! not descending sort!
//to sort descending => sort first then reverse
//its chainable!
console.log(arr1.sort().reverse()); //sort descending
console.log(arr1.sort()); //sort ascending

//to sort ascending for the numbers, the best way is mathematical sort not alphabetical
//the best approach is using the sort(arguments)

//sort(compareFunction)
//compareFunction(a, b) return value:
// > 0	sort a after b ( b before a)
//< 0	sort b after a (a before b)
//=== 0	keep original order of a and b
//so we define this
function compareNumbers(a, b) {
  return a - b;
}
console.log(arr2.sort(compareNumbers));

Array.prototype.sortAscending = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i; j < this.length; j++) {
      if (this[i] > this[j]) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};
const arr3 = [5, 12, 22, 1, 10, 200, 7, 100];
console.log(arr3.sortAscending());
//to decesning you are able to just change if (this[i] > this[j]) to if (this[i] < this[j])
//or using reverse() as chain
console.log(arr3.sortAscending().reverse()); //descending
