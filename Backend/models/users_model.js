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
   Age:{
    type:Number,
    required:true,
   } ,

})
module.exports=new mongoose.model("User",userSchema)