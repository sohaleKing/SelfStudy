// JavaScript Classes are templates for JavaScript Objects. A JavaScript class is not an object. its a template for the object
/*
The constructor method is a special method:
  It has to have the exact name "constructor"
  It is executed automatically when a new object is created
  It is used to initialize object properties ******
  If you do not define a constructor method, JavaScript will add an empty constructor method.
*/
class User {
  // firstName: String
  // lastName: String
  // age: Number
  constructor(firstName, lastName, dob) {
    this.fName = firstName;
    this.lName = lastName;
    this.dob = dob;
  }
  //this constructor its like a blueprint for the object! will make the object with these properties
  //constructor is used to initialize the object properties
  fullName() {
    return `${this.fName} ${this.lName}`;
  }
  age() {
    let current = new Date().getFullYear();
    return current - this.dob;
  }
}

let user1 = new User("soheyl", "Rahgozar", 1983);

console.log("user age = ", user1.age()); //=> user age =  39
console.log("user fullName= ", user1.fullName()); //=> user fullName=  soheyl Rahgozar
console.log(user1); //=> User { fName: 'soheyl', lName: 'Rahgozar', dob: 1983 }

class Car {
  //type
  constructor(brand, year, color, price) {
    this.model = brand;
    this.year = year;
    this.value = price;
    this.colour = color;
  }
  showInfo() {
    return `the car is a ${this.colour} ${this.model} \nfrom ${this.year} \nwith the price of ${this.value}CAD`;
  }
}
let car1 = new Car("BMW", 2020, "black", 25000);
let car2 = new Car("Toyota", 2016, "silver", 5000);
console.log(car1.showInfo());
console.log(car2.showInfo());
console.log(car1);
console.log(car2);

class Skills {
  constructor() {}
  showSkills(getSkills) {
    return getSkills; //no need to use this keyword since there is no property for the class
  }
}
const skill1 = new Skills();
console.log(skill1); //it would be an empty object since the constructor has no param, so there would be no property
console.log(skill1.showSkills("kong Fu"));
