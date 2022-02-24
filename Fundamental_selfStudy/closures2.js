function makeCounter(initCount) {
  let _count = initCount;

  return {
    getCount: () => _count,
    increment: () => ++_count,
  };
}

const counter = makeCounter(5);

console.log("getCount", counter.getCount());
console.log("increment", counter.increment());
console.log("increment", counter.increment());

const counterClosure = (init) => {
  return function increment() {
    return ++init;
  };
};
const counterAction = counterClosure(0);
console.log(counterAction());
console.log(counterAction());
console.log(counterAction());

const lexicalCounter = (init) => {
  const increment = () => {
    return ++init;
  };
  return increment();
};
console.log(lexicalCounter(0));
console.log(lexicalCounter(0));
console.log(lexicalCounter(0));
