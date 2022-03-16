//The Object.fromEntries() method transforms a list of key-value pairs into an object.

const array = [
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
  ["key4", "value4"],
];

const object = Object.fromEntries(array);

console.log(object);
//=> { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }
