const text = "hi google, I am boo, friend of woo";
let pattern = /oo/gi;
console.log(text.match(pattern)); //=> [ 'oo', 'oo', 'oo' ]

//if you remove g from regex identifier, it would return only the first one, when you put its equal to matchAll
