// The arr.includes(item) returns true if an array contains a specified value.
//returns false if the value is not found. it's case sensitive.

// Syntax array.includes(element, start) starting index to search
const arr1 = ["en", "fr", "sp", "ar"];
console.log("is supported language?", arr1.includes("en")); //En is different than en (case sensitive)

const arr2 = ["my name is Soheyl Rahgozar I can speak in english and french"];

//to search a word inside a string! you need to do with indexof
console.log("word english exsit in context?", arr2[0].indexOf("english") > -1);
//doesnt work that way!! =X=> arr2.includes("good") return false
