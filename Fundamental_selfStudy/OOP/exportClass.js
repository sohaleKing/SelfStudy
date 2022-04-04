class User {
  //ts file you can define types
  constructor(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
class UserInfo extends User {
  constructor(fn, ln, dob, st) {
    super(fn, ln);
    this.birthDate = dob;
    this.student = st;
  }
  age() {
    let current = new Date().getFullYear();
    return current - this.birthDate;
  }
}

module.exports = {
  UserInfo,
};
