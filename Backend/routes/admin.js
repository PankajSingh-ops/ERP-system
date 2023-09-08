const express=require("express")
const {postAddUser}=require("../controllers/admin")
const router=express.Router();
router.post("/add-user",postAddUser)
module.exports=router;