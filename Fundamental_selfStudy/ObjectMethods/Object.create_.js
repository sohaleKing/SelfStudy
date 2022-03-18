//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const person = {
  name: "full name",
  age: 0,
  student: true,
};
//we use the person as prototype --> if there is any--> Object.create(null)
const newObject = Object.create(person);
newObject.name = "soheyl";
console.log(newObject);
