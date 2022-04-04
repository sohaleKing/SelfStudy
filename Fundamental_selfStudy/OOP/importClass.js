const { UserInfo } = require("./exportClass");

let user1 = new UserInfo("Tannaz", "Shahzadi", 1981, true);

console.log(user1);
console.log("age = ", user1.age());
console.log("fullName = ", user1.fullName());
user1.student && console.log("she is student");
