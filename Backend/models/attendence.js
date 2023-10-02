const mongoose=require("mongoose")
const attendenceData=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    date:{
        type:String,
        required:true,
    },
    attendence:{
        type:String,
        required:true,
    }
})
module.exports=new mongoose.model("attendence",attendenceData)