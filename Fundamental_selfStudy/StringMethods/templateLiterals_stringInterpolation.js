// Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings,
// for string interpolation with embedded expressions, and for special constructs called tagged templates.

let variable1 = "Soheyl";
let isStudent = true;
let age = 39;
let a = 12,
  b = 7;

console.log(
  `my name is ${variable1} and I am ${age} years old and I ${
    isStudent ? "am" : "am not"
  } student with a grade of ${a + b}`
);
//when you insert ${} you switch from string to javascript! so you can insert your variable as string interpolation
//or even conditional ternary operatior
