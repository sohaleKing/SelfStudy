const user1 = { name: "soheyl", age: 38, student: true };
const user2 = { name: "tannaz", age: 40, student: true };
const user3 = { name: "BellaRose", age: 1, student: false };
const users = [user1, user2, user3];
const students = [];
const nonStudents = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].student) {
    students.push(users[i].name);
  } else nonStudents.push(users[i].name);
}
//console.log(`student = ${students}\nnonStudents = ${nonStudents}`); //would print at next line

while (students.length > 0) {
  console.log(students[students.length - 1]);
  students.length--;
} //will print from the last element to the first one

do {
  //will go to the code before checking the condition!
  console.log(nonStudents[nonStudents.length - 1]);
  nonStudents.length--;
} while (nonStudents.length < 0); //in fact that supposed to be > 0 but as you see it still goes to the loop
