//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
//Syntax=> str.slice(start,end)

const text = "my name is Soheyl and I am a progeammer";
const firstHalf = text.slice(0, text.length / 2);
const secondHalf = text.slice(text.length / 2, text.length);
console.log(firstHalf);
console.log(secondHalf);
