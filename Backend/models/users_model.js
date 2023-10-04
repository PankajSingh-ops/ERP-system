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
   Password:{
      type:String,
      required:true,
   },
   department:{
      type:String,
   },
   employees:[
      {
         employeeId:{
            type:mongoose.Schema.ObjectId
         }
      }
   ],
   managerId:{
      type:mongoose.Schema.ObjectId
   },
   leaves:[
      {
        leaveId:{ 
       type:mongoose.Schema.ObjectId  
        },
        name:{
         type:String
        }
      }
   ]

})
module.exports=new mongoose.model("User",userSchema)