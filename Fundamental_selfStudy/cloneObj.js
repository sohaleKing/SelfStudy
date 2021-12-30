//clone an object!!
const person1 = { name: "soheyl", grade: 80, student: true };
const wrongCopy_Person1 =
  person1; /*you cant copy an object by assignemnt! that only assign the person1 refrence to
wrongCopy_person1 so any changes on one would be apply on the others 
since there are point refrences to a same address in heap!*/
person1.name = "new name";
console.log(wrongCopy_Person1.name); //as explained above

/***************** clone an object using ... rest syntax************/
//1 way: for loop to copy all the properties to new object
const rightCopy_person1 = {};
for (let item in person1) {
  rightCopy_person1[item] = person1[item];
}
console.log("person1 copy = ", rightCopy_person1);
//2: using rest by using ... syntax!
const copy_Person1 = { ...person1 };
//or old way of synatx:
//const copy_Person1 = Object.assign({}, person1)
person1.name = "soheyl";
console.log(copy_Person1.name); // will stay the same as before(in this example as 'new name')
