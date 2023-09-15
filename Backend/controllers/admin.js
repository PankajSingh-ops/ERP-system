const User=require('../models/users_model')
const bcrypt=require("bcrypt")

exports.postAddUser=async(req,res,next)=>{
    // console.log(req.body);
    const {Firstname,Lastname,Email,Phone,Age,
    Role,Password,CnfPassword}=req.body;
    if(Password===CnfPassword){
        const userEmail=await User.findOne({Email:Email})
        if(userEmail){
            res.status(422).json({message:"Email Is is already present"})
            console.log("Already presnet");
        }
        else{try{
            const hashPassword=await bcrypt.hash(Password,12)
            // console.log(hashPassword);
            const response=await User.create({
                Firstname,
                Lastname,
                Email,
                Phone,
                Age,
                Role,
                Password:hashPassword,
            })
             if(response){
                res.status(200).json({message:"Successfully added"})
             }
            }catch(err){
                res.status(500).json({message:err.message})
            }}
    
}else{
  res.status(422).json({message:"Password is not matching"})
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
exports.getEdit=async(req,res,next)=>{
    const{id}=req.params;
    try{
     const data=await User.findById(id)
     if(data){
        res.status(200).json({data:data})
     }else{
        res.status(500).json({message:"wrong data"})
     }
    }catch(err){
    res.status(500).json({message:err.message})
    }
}

exports.postEdit=async(req,res,next)=>{
    const{id}=req.params;
    // console.log(req.body);
    // console.log(id);
    const{Firstname,Lastname,Email,Phone,Age,Role}=req.body;
    // console.log(Lastname,Age);

    try{
        const editable=await User.findByIdAndUpdate(id,{
        Firstname,
        Lastname,
        Email,
        Phone,
        Age,
        Role,

        })
        if(editable){
            res.status(200).json({message:"Edit successful"})
            console.log("successfull");
        }
        else{
            console.log("not successful");
        }

    }catch(err){
        res.status(500).json({message:err.message})
    }
}