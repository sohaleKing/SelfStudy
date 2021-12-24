//watch out using for loop on setTimeout
const array = [100, 200, 300, 400, 500];
// for (let i = 0; i < array.length; i++) {
//   setTimeout(() => {
//     console.log(array[i]);
//   }, 1000);
// }
//the answer is 5 times undefined if you use in DOM or after 1 sec all print out together

//to solve this, let do it like this
const print = (x) => console.log(x);
const delay = () => {
  return function (closure, time) {
    setTimeout(() => {
      print(closure);
    }, time * 1000);
  };
};
array.forEach(delay(print, 1000));
