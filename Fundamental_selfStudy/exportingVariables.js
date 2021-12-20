const user1 = {
    name: "Soheyl",
    Family: "Ragozaar",
    age: 39,
    job: "Software Engineer",
    religion: undefined,
    criminalRecord: null,
    email: "soheyl.rahgozar@mail.mcgill.ca",
    gender: "male",
    student: true,
}
const user2 = {
    name: "Tannaz",
    Family: "Shahzadi",
    age: 37,
    job: "skinCare dermatologist",
    religion: undefined,
    criminalRecord: null,
    email: "",
    gender: "female",
    student: false,
}
const user3 = {
    name: "BellaRose",
    Family: "Rahgozar",
    age: 0.4,
    job: "baby",
    religion: undefined,
    criminalRecord: null,
    email: "bellarose.rahgozar@gmail.com",
    gender: "female",
    student: false,
}
const users = [user1, user2, user3] //its alwats nice to put , at the end in case on change in gitHub you dont have to change two lines
const showUsersName = function (arr) {
    arr.forEach((user) => {
        if (user.email) console.log(user.email)
    })
}

export { user1 }
export { user2, user3 as Bella } //exporting a variable with alias!
export { showUsersName as exportedFunction } //exporting a method
export { users as arrayOfUsers }
