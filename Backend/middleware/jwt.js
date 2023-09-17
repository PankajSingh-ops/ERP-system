const jwt=require('jsonwebtoken')
const User=require("../models/users_model")
module.exports=async(req,res,next)=>{
    console.log("abc");
    if(req.method==="OPTIONS"){
        return next();
      }
      if(req.headers?.authorization){
        let token=req.headers.authorization.split(" ")[1];
        // console.log("token",token);
        try{
          // console.log("hello");
          const decodedToken=await jwt.verify(token,"It is a secret key");
          console.log(decodedToken);
          const user=await User.findById(decodedToken.userId);
          // console.log(user);

          if(!user){
            return res.status(401).json({message:"User does not exist"})
          }
          req.user=user;
          next()
        }catch(err){
          console.log("fail");
          return res.status(401).json({message:"Invalid Token"})
        }
      }else{
        res.status(401).json({message:"Invalid Token"})
      }
}
