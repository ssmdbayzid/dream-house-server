const express = require("express")
const app =  express()
const  cors = require("cors")
const dotenv  = require("dotenv")
dotenv.config()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const connectDatabase = require("./utility/connectData")
const propertyRouter = require("./Routes/propertyRouter")
const authRouter = require("./Routes/authRouter")


app.use(express.json())
app.use(cors({origin: "https://dream-house-server-7ss1.vercel.app", credentials: true}))
app.use(bodyParser.json())

// Connect  mongodb 
connectDatabase().catch(err=> console.log(err.message))


// Routes
app.use("/api/v1/properties", propertyRouter)
app.use("/api/v1/auth", authRouter)

app.get("/", (req, res)=>{
    res.send("server running")
})



app.listen(5000, ()=>{
    console.log("server running with 5000")
})

