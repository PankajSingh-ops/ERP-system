const express=require("express")
const router=express.Router();
const { approveLeave, leaveStatus }=require("../controllers/other")
router.get("/approve-leave/:id",approveLeave)
router.get("/leave-status/:id",leaveStatus)
module.exports=router;