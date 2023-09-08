const User=require('../models/users_model')

exports.postAddUser=async(req,res,next)=>{
    console.log(req.body);
    try{
    const response=await User.create({
        Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        Age:req.body.Age,
    })
     if(response){
        res.status(200).json({message:"Successfully added"})
     }
    }catch(err){
        await res.status(400).json({message:err.message})
    }

}