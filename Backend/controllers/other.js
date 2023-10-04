const Leave=require("../models/leaves")

exports.approveLeave=async(req,res,next)=>{
    const {id}=req.params;
    // console.log(id);
    try{
        const leaveApprove=await Leave.findOneAndUpdate({userId:id},{approve:"Yes"})
        // console.log(leaveApprove);
        if(leaveApprove){
            res.status(200).json({message:"Approved"})
        }

    }catch(err){
        // console.log("mop");
        res.status(500).json({message:err.message})
    }
   
}
exports.leaveStatus=async(req,res,next)=>{
    const{id}=req.params;
    try{
        const userData=await Leave.find({userId:id})
        res.status(200).json({data:userData})

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

exports.getNotification=async(req,res,next)=>{
    const {id}=req.params;
    try{
        const leaveNotification=await Leave.find({managerId:id,approve:"No"})
        if(leaveNotification.length>0){
            res.status(200).json({data:leaveNotification})
        }

    }catch(err){
        res.status(500).json({message:err.message})
    }
}