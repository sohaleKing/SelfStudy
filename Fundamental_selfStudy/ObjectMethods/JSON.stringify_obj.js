const obj = { name: "soheyl", age: 38, student: true, title: "fullStack" };
console.log(obj); //the reuslt will show as an object will keeping all the properties' type
//{ name: 'soheyl', age: 38, student: true, title: 'fullStack' }
console.log(obj.toString()); //=> [object Object] cant do this since that the array method
console.log(JSON.stringify(obj)); //=> {"name":"soheyl","age":38,"student":true,"title":"fullStack"}
//as you see even the properties changed to string
