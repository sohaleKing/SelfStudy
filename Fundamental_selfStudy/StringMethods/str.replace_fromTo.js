const text = "hi this is a sample for our programming as a string to test";

const removeSpace = (str) => {
  return str.replace(/\s/g, "");
};

console.log(removeSpace(text));

console.log(text.replace(/a sample/, "an example")); //when there is g identifier means global means replaceAll
