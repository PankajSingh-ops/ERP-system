const express=require("express")
const router=express.Router();
const { approveLeave, leaveStatus, getNotification }=require("../controllers/other")
router.get("/approve-leave/:id",approveLeave)
router.get("/leave-status/:id",leaveStatus)
router.get("/notification/:id",getNotification)
module.exports=router;