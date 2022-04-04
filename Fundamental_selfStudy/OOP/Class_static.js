//when the class method is static you can not call it on instance!

class Course {
  //type
  constructor(title, credit) {
    this.courseTitle = title;
    this.courseCredit = credit;
  }
  static firstDay() {
    return "Welcome to the course "; //you can add something dynamic like this.courseTitle to it!
  }
}

const course1 = new Course("React", 4);
console.log(course1);
console.log(Course.firstDay());
// Cant call : console.log(course1.firstDay()); //TypeError: course1.firstDay is not a function since its static
