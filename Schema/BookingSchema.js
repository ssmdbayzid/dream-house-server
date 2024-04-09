const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    properties: {
        type: mongoose.Types.ObjectId,
        ref: "Properties"
    },
    phone: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
    }
})

const Booking = mongoose.model("Booking", bookingSchema)
module.exports = Booking;