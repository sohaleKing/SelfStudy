class Person {
  fname: string;
  lname: string; //not capital S or N for the type
  dob: number;

  constructor(fn, ln, d) {
    this.fname = fn;
    this.lname = ln;
    this.dob = d;
  }

  age() {
    let current = new Date().getFullYear();
    return current - this.dob;
  }
  fullName() {
    return this.fname + " " + this.lname;
  }
}

class Employee extends Person {
  id: number;
  position: string;
  isActive: boolean;
  constructor(fname, lname, dob, id, position, status) {
    super(fname, lname, dob);
    this.id = id;
    this.position = position;
    this.isActive = status;
  }
  showInfo() {
    if (!this.isActive) {
      return "no record found";
    }
    return `Employee# : ${
      this.id
    }\nName: ${this.fullName()}\nAge: ${this.age()}\nPosition: ${
      this.position
    } `;
  }
}

let employe1 = new Employee(
  "soheyl",
  "Rahgozar",
  1983,
  835520,
  "Software Developer",
  true
);
console.log(employe1.showInfo());

//to run this you should run the command tsc typescript.ts then run node ....

//extends means:
//The new class is a child. It gets benefits coming with inheritance.
//It has all the properties and methods of its parent.

//implements means:
//The new class can be treated as the same "shape", but it is not a child.
//It could be passed to any method where Person is required, regardless of having a different parent than Person.

class Member implements Person {
  fname: string;
  lname: string;
  dob: number;
  constructor(fn, ln, d) {
    this.fname = fn;
    this.lname = ln;
    this.dob = d;
  }
  age() {
    let current = new Date().getFullYear();
    return current - this.dob;
  }
  fullName() {
    return this.fname + " " + this.lname;
  }
}
//to be able to use implements you need to define all the type (fname.....) also mthods (fullName ....)
//in face its good for inteface.....

interface People {
  fname: string;
  lname: string;
  dob: number;
}

class Iranian implements People {
  fname: string;
  lname: string;
  dob: number;
}

//Inheritance(extends) dictates that a child class (subclass) inherits all the attributes and methods from a parent class (superclass).
//Encapsulation dictates that one class must not have access to the (private) data of another class.
//To access the interface methods, the interface must be "implemented" (kinda like inherited) by another class ...
//... with the implements keyword (instead of extends). The body of the interface method is provided by the "implement" class.
