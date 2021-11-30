const users = ([user1, user2, user3] = [
    { name: "soheyl", email: "soheyl@gamil.com", age: 38 },
    { name: "tannaz", email: "", age: 40 },
    { name: "bellaRose", email: "bella@gamil.com", age: 1 },
])
const guests = [
    (user4 = { name: "ahoo", email: "ahoo@gamil.com", age: 39 }),
    (user5 = { name: "golenaz", email: "golenaz@gamil.com", age: undefined }),
]
const vip1 = {
    name: "sasan",
    email: "sasan@gamil.com",
    age: 63,
    president: true,
}
const vip2 = {
    name: "amir",
    email: "",
    age: 83,
    president: false,
    ticketNumbers: [251, 524, 112, 165, 851, 445, 210],
}
//you can give the users array's elements name to call!!

console.log(users)
console.log(user2)
console.log(user4)

const { president } = vip2 //distructing on a single property of an object
console.log(president)

//distructing on the elements of an array
const [firstTicket, SecondTicket, _3, _4, _5, almostLastTicket, _last] =
    vip2.ticketNumbers
console.log(SecondTicket)
console.log(almostLastTicket)
console.log(_4)

const onlyShowEmails = function (array) {
    array.forEach((element) => {
        let { email } = element //distructing on the object by a function
        email && console.log(email)
        let { name, age } = element
        age > 18 ||
            console.log(`the age of ${name} is not defined or is not +18`)
    })
}
onlyShowEmails(users)
onlyShowEmails(guests)
