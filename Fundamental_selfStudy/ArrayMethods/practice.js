const users = [
  { name: "soheyl", age: 30 },
  { name: "tannaz", age: 29 },
  { name: "bellaRose", age: 25 },
];

//scenario: change bellaRose age by searching name?
users.forEach((elem) => {
  if (elem.name === "bellaRose") elem.age = 7;
});
console.log(users);
