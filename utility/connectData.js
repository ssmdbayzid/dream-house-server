const mongoose = require("mongoose")

const connectDatabase = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)

        console.log("Database connected")
    } catch (error) {
        console.log(error.message, "Database connection failed")
    }
}

module.exports = connectDatabase;

/*
MONGO_URL = mongodb+srv://dream-house:yUApj5On7Zq9m3Yy@cluster0.yvfoqeg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET_KEY = c8a8437677fcfab679fsadas92c8470ffc34b932f5sdfaaa3296c09f65dsf2d2becfe1db8b2dsf


  SUCCESS_URL = http://localhost:5173/login/success
 FAILED_URL = http://localhost:5173/login/failed

*/