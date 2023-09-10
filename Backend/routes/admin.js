const express=require("express")
const {postAddUser, getUser}=require("../controllers/admin")
const router=express.Router();
router.post("/add-user",postAddUser)
router.get("/teams",getUser)
module.exports=router;