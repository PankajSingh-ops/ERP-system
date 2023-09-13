
const signup=require("../models/signup")
const jwt=require("jsonwebtoken")
const bcrypt=require('bcrypt')
exports.postSignup=async(req,res,next)=>{
    console.log(req.body);
   const {Email,Password,CnfPassword}=req.body;
   if(Password===CnfPassword){
    const userData=await signup.findOne({Email:Email})
    if(userData){
        res.status(500).json({message:"Email already present"})
        console.log("Email already present");
    }
    else{
    try{
        const hashPassword=await bcrypt.hash(Password,12)
        const data=await signup.create({
            Email:Email,
            Password:hashPassword
        })
        if(data){
    
            res.status(201).json({message:"Successfully added"})
            // console.log("success");
        }
    
       }catch(err){
        res.status(500).json({message:err.message})
        // console.log("error");
       } 
    }

   }
   else{
    res.status(500).json({message:"Password does not match"})
    // console.log("Not done");
   }

  
}
exports.postLogin=async(req,res,next)=>{
    // console.log(req.body);
    const{Email,Password}=req.body
    // console.log(Email,Password);

    try{
       const userData=await signup.findOne({Email:Email})
       const hashPassword=await bcrypt.compare(Password,userData.Password)
    //    console.log(hashPassword);
       if(hashPassword){
        const token=await jwt.sign({userId:userData._id},"It is a secret key",{expiresIn:"1h",})
        // console.log(token);
        res.status(200).json({token:token})
       }
    }catch(err){
        console.log(err.message);
        return res.status(500).json({message:err.message})
    }
}