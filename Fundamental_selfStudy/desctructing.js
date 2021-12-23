const users = ([user1, user2, user3] = [
  //array of objects
  { name: "soheyl", email: "soheyl@gamil.com", age: 38 },
  { name: "tannaz", email: "", age: 40 },
  { name: "bellaRose", email: "bella@gamil.com", age: 1 },
]);

console.log("users = ", users);
console.log("user2", user2); //in fact user2 is assigned to the second one base on its order also is second!

const guests = [
  //also array of objects
  (user4 = { name: "ahoo", email: null, age: 39 }),
  (user5 = { name: "golenaz", email: "golenaz@gamil.com", age: undefined }),
];
console.log("guests = ", guests);
console.log("user4 = ", user4);

//array of objects without giving user6.. user7....!! **the most popular  way to define array of objects*****
const new_users = [
  { name: "giti", email: "giti@gmail.com", age: 59 },
  { name: "mahnaz", email: "mahnaz@gmail.com", age: 64 },
];

const vip1 = {
  name: "sasan",
  email: "sasan@gamil.com",
  age: 63,
  president: true,
};

const vip2 = {
  name: "amir",
  email: "",
  age: 83,
  president: false,
  ticketNumbers: [251, 524, 112, 165, 851, 445, 210],
};
//you can give the users array's elements name to call!!

const { president } = vip2; //distructing on a single property of an object
//you need to give the same name the property and assigned it to the object like => const{propertyName} = obj
console.log("vip2 persident status = ", president);

//distructing on the elements of an array
const [firstTicket, SecondTicket, _4, _5, almostLastTicket, _last] =
  vip2.ticketNumbers;
console.log("secondElem = ", SecondTicket);
console.log("lastElem = ", almostLastTicket);
console.log("4th element = ", _4);
//the number 4th doesnt do anything!! the order in const[elem1,elem2, ....,lastelem] all matters

const onlyShowEmails = function (array) {
  array.forEach((element) => {
    let { email } = element; //distructing on the object by a function
    let { name, age } = element;
    email && console.log(`email of ${name} = `, email); //if emails esxist show it!
    age > 18 || console.log(`the age of ${name} is not defined or is not +18`);
  });
};
onlyShowEmails(users);
onlyShowEmails(guests);
