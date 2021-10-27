const falsys = [undefined, null, '', 0, false, NaN]

const name = 'Bobby'

// console.log(!!name)

// falsys.map((el) => console.log(!!el))

// if (!name) {
//     console.log('OH NO, name is missing!!!')
// } else {
//     console.log(`here is the name: ${name}`)
// }

// name && console.log('OH NO, name is missing!!!')

// !!name && console.log('OH NO, name is missing!!!')

const personName = name || 'name is missing'

console.log(personName)
