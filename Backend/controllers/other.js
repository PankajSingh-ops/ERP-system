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