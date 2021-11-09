let user1 = {
    name: "soheyl",
    family : "rahgozar",
    email: "soheyl.rahgozar@gmail.com",
    age: 38,
    student : true
}
let user2 = {
    name: "giti",
    family : "sahba",
    email: "gitisahba@gmail.com",
    age: 60,
    student : false
}
let user3 = {
    name: "sasan",
    family : "rahgozar",
    email: "sasan.rahgozar@gmail.com",
    age: 62,
    student : false
}

let student = [user1, user2, user3]

let findEmail = function (input) {
    let email;
    for (let i = 0; i < student.length; i++) {
        email = student[i].email
        if (email === input) {
            return ("exist")
        }
    }
    return "not Found"
}
console.log(findEmail("gitisahba1@gmail.com"))
