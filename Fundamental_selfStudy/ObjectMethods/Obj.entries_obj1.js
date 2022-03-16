const names = {
  soheyl: 100,
  tannaz: 99,
  Armin: 65,
  Sahar: 75,
};

console.log(Object.entries(names));

const object1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
};

const newArrayofObj = Object.entries(object1);

console.log(newArrayofObj);

/* it will return an returns an array of a given object's own enumerable string-keyed property [key, value] pairs

[
  [ 'key1', 'value1' ],
  [ 'key2', 'value2' ],
  [ 'key3', 'value3' ],
  [ 'key4', 'value4' ]
]

 */
