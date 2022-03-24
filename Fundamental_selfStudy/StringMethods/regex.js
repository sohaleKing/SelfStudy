// Regular expressions
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// https://www.w3schools.com/js/js_regexp.asp

/*
- A regular expression is a pattern of characters.
- The pattern is used to do pattern-matching "search-and-replace" functions on text.
- RegExp Object is a pattern with Properties and Methods. 
- These patterns are used with the exec() and test() methods of RegExp,
and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.
*/

//SYNTAX =>  /pattern/modifier(s);

/* common Modifers
g	Perform a global match (find all matches rather than stopping after the first match)
i	Perform case-insensitive matching
m	Perform multiline matching
*/

const text = "I, my name is Soheyl RAHGOZAAR & I am a student 1542 10 -10 100";

let pattern = /goza/i;

let result = text.match(pattern);
console.log(result); //=> GOZA index 24 input: the text
console.log(result.index); //=> 24
console.log(result[0]); //=> GOZA

//function
const matchConsole = (pattern) => {
  let _result = text.match(pattern);
  console.log(_result);
};

pattern = /I/gi;
matchConsole(pattern);
//=> [ 'I', 'i', 'I' ]

/*Brackets========================================================================================
Brackets are used to find a range of characters:
Expression	Description
[abc]	Find any character between the brackets
[^abc]	Find any character NOT between the brackets
[0-9]	Find any character between the brackets (any digit)
[^0-9]	Find any character NOT between the brackets (any non-digit)
*/
pattern = /[sI]/gi; //=> [ 'I', 'i', 's', 'S', 'I', 's' ]
matchConsole(pattern);

pattern = /[0-9]/g; //range!
matchConsole(pattern); //=> ['1', '5', '4', '2','1', '0', '1', '0','1', '0', '0']

/*   Metacharacters are characters with a special meaning:==========================================
\d	Find a digit	
\s	Find a whitespace character	
\b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b        */

pattern = /\d/g;
matchConsole(pattern); //=> ['1', '5', '4', '2','1', '0', '1', '0','1', '0', '0']

pattern = /\s/g;
matchConsole(pattern); //=>[' ', ' ', ' ', ' ',' ', ' ', ' ', ' ',' ', ' ', ' ', ' ',' ', ' ']
//maybe its better to get the index

const newText = text.replace(pattern, "*"); //if you remove the g identifier it would be replace- with g it would be replaceAll
console.log(newText);

const removeSpace = (str) => {
  return str.replace(/\s/g, ""); // example for \s	Find a whitespace character
};
const sampleText = "hi this is a text with lot of space";
console.log(removeSpace(sampleText));

matchConsole(/\bso/i); //=> index 14 if found nothing will return -1

/*
Quantifiers define quantities:
n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n
*/

matchConsole(/a+/gi); //=> [ 'a', 'A', 'AA', 'a', 'a' ]
matchConsole(/a*/gi); //=> will return an array of almost all! "" will be includes a lot!

/*
if you use it as Object, it will have methods 1- RegEx.test() returns true/false 2- Regex.exec()
*/

console.log("is there any 'soheyl' in context? ", /soheyl/i.test(text)); //=> true
console.log("show me the name", /\bSoHEYL/i.exec(text)); // string from index 14
