const express=require("express")
const {postAddUser, getUser, postDelete, postEdit, getEdit, managerData, employeeData, postDepartment}=require("../controllers/admin")
const router=express.Router();
const authJWT=require("../middleware/jwt")
router.post("/add-user",authJWT,postAddUser)
router.get("/teams",getUser)
router.get("/delete/:id",postDelete)
router.get("/update/:id",getEdit)
router.put("/update/:id",postEdit)
router.get("/manager",managerData)
router.get("/employee",employeeData)
router.post("/department",postDepartment)
module.exports=router;