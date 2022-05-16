const fs = require("fs");

const b = fs.readFileSync("data.txt");

const s = b.toString();

const splitted = s.split("\r\n");

// console.log(splitted.length);
// console.log("smokey", splitted);

splitted.shift();

// console.log("smokey", splitted);

const a = splitted.map((e) => {
  //   console.log(e);

  //   console.log(e.split(" "));

  return e.split(" ").filter((e) => e.length);
});

// console.log("A", a)

// const c = a.map((e) => [e[0], Number(e[1]), Number(e[2])]);
const c = a.map((e) => {
  const obj = {};
  obj[e[0]] = [Number(e[1]), Number(e[2])];
  return obj;
});

console.log("C", c);

const result = {};

c.forEach((elem) => {
  // console.log("smokey", Object.keys(elem)[0])

  const theDate = Object.keys(elem)[0];

  console.log("taco", theDate);
});

// const omega = c.reduce((acc, elem) => {
//     const date = Object.keys(elem)[0]

//     // console.log(date)

//     if (acc[date]) {
//         acc[date][0][0] += elem[0][0]
//         acc[date][0][1] += elem[0][1]
//     } else {
//         // console.log("pink", elem)
//         acc[date] = elem[0]
//     }

//     return acc
// }, {})

// console.log(omega)
