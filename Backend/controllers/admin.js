const User=require('../models/users_model')

exports.postAddUser=async(req,res,next)=>{
    // console.log(req.body);
    try{
    const response=await User.create({
        Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        Email:req.body.Email,
        Phone:req.body.Phone,
        Age:req.body.Age,
        Role:req.body.Role,
    })
     if(response){
        res.status(200).json({message:"Successfully added"})
     }
    }catch(err){
        await res.status(400).json({message:err.message})
    }

}
exports.getUser=async(req,res,next)=>{
    try{
        const user=await User.find()
        if(user){
            res.status(200).json({data:user})
        }
        else{
            res.status(500).json({message:"user not found"})
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
   
    
}
exports.postDelete=async(req,res,next)=>{
    const {id}=req.params
    // console.log(id);
    try{
     const prodel=await User.findByIdAndDelete(id)
     if(prodel){
        res.status(200).json({message:"File deleted succesfully"})
     }
     else{
        res.status(401).json({message:"Some problem"})
     }
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

exports.postEdit=async(req,res,next)=>{
    const{id}=req.params;
    console.log(id);
    try{
        const editable=await User.findByIdAndUpdate(id,{
        Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        Email:req.body.Email,
        Phone:req.body.Phone,
        Age:req.body.Age,
        Role:req.body.Role,

        })
        if(editable){
            res.status(200).json({message:"Edit successful"})
        }

    }catch(err){
        res.status(500).json({message:err.message})
    }
}