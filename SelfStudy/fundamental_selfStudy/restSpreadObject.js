//clone an object!!
const person1 = { name: "soheyl", grade: 80, student: true }
const wrongCopy_Person1 = person1 //you cant copy an object by assignemnt! that only assign the person1 refrence to
//wrongCopy_person1 so any changes on one would be apply on the others since there are point refrences to a same address in heap!
person1.name = "new name"
console.log(wrongCopy_Person1.name) //as explained above

/***************** clone an object using ... rest syntax************/
//1 way: for loop to copy all the properties to new object
//2: using rest by using ... syntax!
const copy_Person1 = { ...person1 }
//or old way of synatx:
//const copy_Person1 = Object.assign({}, person1)
person1.name = "soheyl"
console.log(copy_Person1.name) // will stay the same as 'new name'

/******************** merge two objects!******************/
const person1_ExtraInfo = { gender: "male", age: 36, status: undefined }

//const peron1_fullInfo = { ...person1, ...person1_ExtraInfo }      //new syntax
const person1_fullInfo = Object.assign(person1, person1_ExtraInfo) //old syntax
console.log(person1_fullInfo) // it will show all of them together

//its intresting you can change the status
//If objects have a property with the same name, then the right-most object property overwrites the previous one
const person1_newStatus = { status: "married" }
const person1_newFullInfo = {
    ...person1,
    ...person1_ExtraInfo,
    ...person1_newStatus,
}
console.log(person1_newFullInfo)
/* Both the spread operator ( ...) and Object.assign() method perform a shallow merge.
 It means that if an object has a property that references to another object, the property
  of the original object and result target object will reference the same object. */

console.log(person1.grade === person1_fullInfo.grade)

// its also might be use when you destructing the object!
