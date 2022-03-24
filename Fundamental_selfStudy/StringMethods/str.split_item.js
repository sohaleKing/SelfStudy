//The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array
//with string.split(" ") will break it to word when sees " "

const text = "my name is Soheyl and I am a progeammer";

const words = text.split(" ");
console.log(words); //=> [ 'my', 'name', 'is', 'Soheyl', 'and', 'I', 'am', 'a', 'progeammer' ]
