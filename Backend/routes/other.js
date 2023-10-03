const express=require("express")
const router=express.Router();
const { approveLeave }=require("../controllers/other")
router.get("/approve-leave/:id",approveLeave)
module.exports=router;