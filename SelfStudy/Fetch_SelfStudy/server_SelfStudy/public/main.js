console.log("hello from main.js")

//taco its the endpoint here! when you want to intract with taco!
// fetch("/taco").then((res) => {
//     //console.log(res.text()) //but you would get responce object from only res !! lets use the method text()
//     res.text().then((data) => console.log(data))
// }) //but this is the bad way of doing this!! always chain promises outside!!.then .then outsidfe!!

//same as above

// fetch("/taco")
//     .then((res) => {    //without the squily it would be without return
//         return res.text()
//     })
//     .then((data) => console.log(data))

fetch("/taco")
    .then((res) => res.text())
    .then((data) => console.log(data))
// the synatax is this: response.text() will return a promise and to resolve the promise its always .then()
