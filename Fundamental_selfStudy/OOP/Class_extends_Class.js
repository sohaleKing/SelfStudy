//To create a class inheritance, use the "extends" keyword.
//A class created with a class inheritance, inherits all the methods from another class
//The extends keyword is used in class declarations or class expressions to create a class as a child of another class.

class Make {
  //properties type
  //if your object has a property you need to define them in your constructor parameters
  constructor(make) {
    this.company = make;
  }
  showCompany() {
    return "made by " + this.company;
  }
}

class Model extends Make {
  //type here!
  constructor(model, brand, year) {
    super(brand); //The super() method refers to the parent class.
    //we call the parent's constructor method and gets access to the parent's properties and methods.
    this.model = model;
    this.year = year;
    //note: we need to call super before using this keyword to define Model properties
  }
  carInfo() {
    return `this is a ${this.model} from ${
      this.year
    } and ${this.showCompany()}`;
  }
}

const car1 = new Model("X5", "BMW", 2019);
console.log(car1); //=> Model { company: 'BMW', model: 'X5', year: 2019 }
// as you see even the property name has inheritence from Make class and its compnay not brand and came frist property
//even on constructor was second!
console.log(car1.carInfo()); //=> this is a X5 from 2019 and made by BMW

class User {
  constructor(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
class Student extends User {
  constructor(fn, ln, id, status) {
    super(fn, ln);
    this.id = id;
    this.isActive = status;
  }
  showInfo() {
    if (!this.isActive) {
      return "student hasnt been registered yet!";
    }
    return `student ${this.fullName()} with the student number ${
      this.id
    } is registered`;
  }
}
let student1 = new Student("Soheyl", "Rahgozar", 1234, true);
let student2 = new Student("Tannaz", "Shahzadi", 5678, false);

console.log(student1);
console.log(student1.showInfo());
console.log(student2);
console.log(student2.showInfo());
