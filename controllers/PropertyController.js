const Booking = require("../Schema/BookingSchema");
const Property = require("../Schema/PropertySchema")


//------ Get Properties --------
exports.getProperties = async(req, res) =>{
 try {      
//    console.log("req.user", req.user)
   const result = await Property.find();    

    return res
    .status(200).json({success: true, message:"get data success", data: result})
 } catch (error) {
    return res
    .status(500).json({success:  false, message: error.message})
 }
}

//------ Get Single Properties --------

exports.getSingleProperty = async(req, res) =>{
    try {
        const id =  req.params.id;        
        const result = await Property.findById(id)
       return res
       .status(200).json({success: true, message:"get data success", data: result})
    } catch (error) {
       return res
       .status(500).json({success:  false, message: error.message})
    }
   }

//------ Add Properties --------
exports.addProperty = async(req, res)=>{
   try {
      console.log(req.body , "add product")
      return res
      .status(200).json({success: true, message: "Add property success", data: "result"})
   } catch (error) {
      return res
      .status(500).json({success: false, message: error.message})
   }
}

exports.postComment = async (req, res) =>{
   try {
      const id = req.params.id;

      
      const property = await Property.findById(id)
      
      property.comments.push(req.body);
      
       await property.save()
      
      
      return res
      .status(200).json({success: false, message: "Thanks for your feedback", data: "result"})
   } catch (error) {
      return res
      .status(500).json({success: true, message:error.message})
   }      
}
 
//  Booking Property 
 exports.bookingProperty = async(req, res) =>{
   try {
      const id = req.params.id;
      console.log("this is from booking")
      const newBooking = {
         user: req.body.userId,
         property: id,
         phone: req.body.phone,
         date: req.body.date,
        }

      const existingBooking = await Booking.findOne({user:req.body.userId, property: id})
     
      if(existingBooking){
         return res.status(400).json({ success: false, message: "You have already booked this property." });
      }
     

      const result =  new Booking(newBooking)
        await result.save()

      const updateUser = await User.updateOne({_id: req.body.userId}, {
       $push: {
           booking: result._id,
       }
      })

      console.log(updateUser)
      return res
      .status(200).json({success: false, message: "Thanks for your booking", data: "result"})
   } catch (error) {
      console.log(error.message)
      return res      
      .status(500).json({success: true, message:error.message})
   }   
}


exports.getAllBookedProperties = async(req, res)=>{
   try {
      console.log("clickd  on booked")
      const result = await Booking.find();
      console.log(result)
      return res
      .status(200).json({success: false, message: "Thanks for your booking", data: result})
   } catch (error) {
      return res
      .status(500).json({message: "this is from booked",success: true, message:error.message})
   }
}