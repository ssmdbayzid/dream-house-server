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
const Booking = require("./Schema/BookingSchema")


app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173", 
    // origin: "https://dreamhouses-realestate.netlify.app", 
    credentials: true
}))
app.use(bodyParser.json())

// Connect  mongodb 
connectDatabase().catch(err=> console.log(err.message))


// Routes
app.use("/api/v1/properties", propertyRouter)
app.use("/api/v1/auth", authRouter)

app.get("/", (req, res)=>{
    res.send("server running")
})

app.get("/booking", async (req, res)=>{
    const result = await Booking.find()
    return result
})

app.listen(5000, ()=>{
    console.log("server running with 5000")
})

