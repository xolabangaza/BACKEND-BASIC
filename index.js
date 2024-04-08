const express = require("express")
const app = express()
const PORT = 3000

// MIDDLIWARE FOR SERVING STATIC FILES
app.use(express.static('public'))

// CONFIGURATION OF BODY PARSES
app.use(express.json())

// 
app.use(express.urlencoded())

// RESPONSE TO 
app.get('/', (req, res)=>{
    res.send("Hello World")
})

// GETS BODY FROM THE CLIENT
app.post('/users', (req, res)=>{
    let name = req.body.name
    let surname = req.body.surname

    console.log("We got ", name ,surname)
    res.send("Hello World")
})

// ALWAYS ON THE BOTTOM
app.listen(PORT, ()=>{
    console.log("listeniing @ port: ",PORT)
})