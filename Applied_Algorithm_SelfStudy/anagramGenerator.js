

const anagram_generator = (str) => {
  if (str.length === 1) return str;
  const result = new Array();
  for (let i = 0; i < str.length; i++) {
    let start = str[0];
    let _new = anagram_generator(str.slice(1, str.length));
    for (let j = 0; j < _new.length; j++) result.push(start + _new[j]);
    str = str.substr(1, str.length - 1) + start;
  }
  return result;
};

//example:
const input = "abcd";
console.log(`output = ${anagram_generator(input)}`);
//it will show in console as string of possible words with the same length!
// if you want it in an array just console.log(anagram_generator(input))
