const User = require("../models/users_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.postLogin = async (req, res, next) => {
  // console.log(req.body);
  const { Email, Password } = req.body;
  // console.log(Email,Password);

  try {
    const userData = await User.findOne({ Email: Email });
    const hashPassword = await bcrypt.compare(Password, userData.Password);
    //    console.log(hashPassword);
<<<<<<< HEAD
       if(hashPassword){
        const token=await jwt.sign({userId:userData._id,role:userData.Role},"It is a secret key",{expiresIn:"1h",})
        // console.log(token);
        res.status(200).json({token:token,userId:userData._id,role:userData.Role})
       }
    }catch(err){
        console.log(err.message);
        return res.status(500).json({message:err.message})
=======
    if (hashPassword) {
      const token = jwt.sign(
        { userId: userData._id, role: userData.Role },
        "It is a secret key",
        { expiresIn: "1h" }
      );
      // console.log(token);
      res.status(200).json({ token: token, role: userData.Role });
>>>>>>> 385d4bf6b6fc659bfeffd781be7d86613b7a2dfe
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};
