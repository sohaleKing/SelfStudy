const user1 = {
    firstName: "Soheyl",
    lastName: "s",
    email: "soheyl.rahgozar@gmail.com",
    student: false,
    age: 19,
}

//lets destructing the object, so instead of writing user1.email and user1.firstName ....
//each time just need to write email, firstName like const { email } = user1 and then email would be the value of email property
// you dont need to do it for all, but only email might be enough in some cases!! console.log(email) to see

const { fristName, lastName, email, student, age } = user1

console.log(!!email) // that would be true if exist
console.log(!lastName) // false if exist, true if not
// so you can use this as bouncers!!
if (!lastName) console.log("oops there is no family name")

/****************short circuiting ***************/
//do the right hand side of && if the left hand side true! otherwise the intrepreter wont check the right hand side!
// true && doSomething (only if left hand side true)
age > 18 && console.log("you are welcome to +18 content!") // or as another example only print email if exists!

// do the right habd sinde of || if the left hand side false!
// false || do_something! (only if the left hand side false)
age > 18 || console.log("you are banned to enter this page") // if they guy is not 18 will throw an error message!

lastName || console.log("lastName  doesnt exist")
lastName && console.log("lastName exists")

user1.lastName = "rahgozar" //remeber to assign a new value to destructed object you need to use the full addressing!!

lastName && console.log("lastName now Exists")
