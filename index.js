const express = require("express")
const app =  express()
const  cors = require("cors")
const dotenv  = require("dotenv")
dotenv.config()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


app.use(express.json())
app.use(cors({origin: "http://localhost:5173/", credentials: true}))
app.use(bodyParser.json())


app.get("/", (req, res)=>{
    res.send("server running")
})

app.listen(5000, ()=>{
    console.log("server running with 5000")
})

