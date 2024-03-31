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

exports.bookingProperty = async(req, res) =>{
   try {
      const id = req.params.id;
      console.log(req.body, id)

      return res
      .status(200).json({success: false, message: "Thanks for your booking", data: "result"})
   } catch (error) {
      return res
      .status(500).json({success: true, message:error.message})
   }   
}
