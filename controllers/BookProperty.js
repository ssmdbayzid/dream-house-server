const User = require("../Schema/UserSchema");

exports.bookingProperty = async(req, res) =>{
    try {
       const id = req.params.id;
       
       
       const newBooking = {
        user: req.body.userId,
        property: id,
        phone: req.body.phone,
        date: req.body.date,
       }

       const result = await new Booking(newBooking)
       result.save()

       const updateUser = await User.updateOne({_id: req.body.userId}, {
        $push: {
            booking: result._id,
        }
       })

       console.log(updateUser)
       return res
       .status(200).json({success: false, message: "Thanks for your booking", data: "result"})
    } catch (error) {
       return res
       .status(500).json({success: true, message:error.message})
    }   
 }
 