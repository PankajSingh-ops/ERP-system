const express=require("express")
const {postAddUser, getUser, postDelete, postEdit}=require("../controllers/admin")
const router=express.Router();
router.post("/add-user",postAddUser)
router.get("/teams",getUser)
router.get("/delete/:id",postDelete)
router.put("/update/:id",postEdit)
module.exports=router;