const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, trim: true,},
    email: {type: String, required: true, trim: true },
    password: {type: String, trim: true },
    photo: {type: String, trim: true },
    booking: [{type: mongoose.Types.ObjectId, ref: "BookProperty"}],
    my_properties: [{type: mongoose.Types.ObjectId, ref: "Properties"}]
    
},{ strictPopulate: false })


const User = mongoose.model("User", userSchema);

module.exports = User