const mongoose=require("mongoose")
const signup_user=new mongoose.Schema({
   Email:{
    type:String,
    required:true,
   } ,
   Password:{
    type:String,
    required:true,
   }
})
module.exports=new mongoose.model("Signup",signup_user)