const express=require("express")
const {postAddUser, getUser, postDelete, postEdit, getEdit, managerData, employeeData, postDepartment, getDepartments, getCalender, postLeave, getLeave, deleteLeave}=require("../controllers/admin")
const router=express.Router();
const authJWT=require("../middleware/jwt")
router.post("/add-user",authJWT,postAddUser)
router.get("/teams",getUser)
router.get("/delete/:id",postDelete)
router.get("/update/:id",getEdit)
router.put("/update/:id",postEdit)
router.get("/manager",managerData)
router.get("/employee",employeeData)
router.get("/department",getDepartments)
router.post("/department",postDepartment)
router.post("/calender", getCalender)
router.post("/leave",postLeave)
router.get("/leave-application/:id",getLeave)
router.get("/delete-leave/:id",deleteLeave)

module.exports=router;