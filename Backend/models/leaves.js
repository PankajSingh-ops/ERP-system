const mongoose=require("mongoose")
const leaveData=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    fromDate:{
        type:String,
        required:true,
    },
    toDate:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
    },
    approve:{
        type:String,
        required:true,

    }
})
module.exports=new mongoose.model("leaves",leaveData)