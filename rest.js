const obj1 = {
    cat: 'ginger',
}

const obj2 = {
    favFood: 'chicken stew',
}

const newObj = { ...obj1, ...obj2 }

console.log(newObj)

function someFunc(arg1, arg2, ...rest) {
    console.log(rest)
}

someFunc('a', 'b', 'c', 'd', 'e')
