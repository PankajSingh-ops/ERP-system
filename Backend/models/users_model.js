const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
   Firstname:{
    type:String,
    required:true,

   } ,
   Lastname:{
    type:String,
    required:true,
   } ,
   Email:{
      type:String,
      required:true,

   },
   Phone:{
      type:Number,
      required:true,

   },
   Age:{
    type:Number,
    required:true,
   } ,
   Role:{
      type:String,
   },

})
module.exports=new mongoose.model("User",userSchema)