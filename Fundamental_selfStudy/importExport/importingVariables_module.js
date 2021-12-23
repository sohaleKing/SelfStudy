const users = require("./exportingVariables_module");

console.log("users = ", users);

//and its all better to do the object distrcturing to have userier access there!
const { name } = users.user1;
console.log("user1 name = ", name);

//so mabe better to distructing the imported object at the begining!

const { user1, user2 } = require("./exportingVariables_module");

console.log("user1 age is = ", user1.age);

users.forEach((user) => {
  let { name, email } = user;
  console.log(`the user ${name} email  = `, email);
});
