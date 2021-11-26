// const { request } = require("express");

// const express = request    **system put that automatically when I was going to declare the express varibale

const express = require("express")

const app = express()

app.use(express.static("public")) //this magic will serve the index inside the public folder! you can change public to anything want!
// as far as you change other public folder to the same name as here! index is the default file name!so if you want to serve
//any other file.html you would be serve to start but need to put localhost:2021/anyfile.html!
//when you go to localhost:2021 its like localhost:2021/
//when it sees the app.use(express.static("public")) "middleware" it matches with "/" so it will shadow the other one! but if you
//move app.get("/", (req,res)) above the middleware now that matches and will set the server so will shadow the middleware!!

//get shadow by above!! wont be apply!! that app.get()  ** so order matters
//but we keep this since we would use the fetch and maybe need this to handle that address!!
app.get("/myServer", (req, res) => {
    //fist argument is the path and second of called handler!
    res.send("myServer")
})

app.listen(2021, () => {
    //define a port and message on running!!
    console.log("listening to 2021 now!")
})
