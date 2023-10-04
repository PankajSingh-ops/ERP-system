const User=require('../models/users_model')
const bcrypt=require("bcrypt")
const Department=require("../models/department")
const Attendence=require("../models/attendence")
const Leave=require("../models/leaves")
const department = require('../models/department')

exports.postAddUser=async(req,res,next)=>{
    // console.log(req.body);
    const {Firstname,Lastname,Email,Phone,Age,
    Role,Password,CnfPassword}=req.body;
    if(Password===CnfPassword){
        const userEmail=await User.findOne({Email:Email})
        if(userEmail){
            res.status(422).json({message:"Email Is is already present"})
            console.log("Already presnet");
        }
        else{try{
            const hashPassword=await bcrypt.hash(Password,12)
            // console.log(hashPassword);
            const response=await User.create({
                Firstname,
                Lastname,
                Email,
                Phone,
                Age,
                Role,
                Password:hashPassword,
            })
             if(response){
                res.status(200).json({message:"Successfully added"})
             }
            }catch(err){
                res.status(500).json({message:err.message})
            }}
    
}else{
  res.status(422).json({message:"Password is not matching"})
}

}
exports.getUser=async(req,res,next)=>{
    try{
        const user=await User.find()
        if(user){
            res.status(200).json({data:user})
        }
        else{
            res.status(500).json({message:"user not found"})
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
   
    
}
exports.postDelete=async(req,res,next)=>{
    const {id}=req.params
    // console.log(id);
    try{
     const prodel=await User.findByIdAndDelete(id)
     if(prodel){
        res.status(200).json({message:"File deleted succesfully"})
     }
     else{
        res.status(401).json({message:"Some problem"})
     }
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
exports.getEdit=async(req,res,next)=>{
    const{id}=req.params;
    try{
     const data=await User.findById(id)
     if(data){
        res.status(200).json({data:data})
     }else{
        res.status(500).json({message:"wrong data"})
     }
    }catch(err){
    res.status(500).json({message:err.message})
    }
}

exports.postEdit=async(req,res,next)=>{
    const{id}=req.params;
    // console.log(req.body);
    // console.log(id);
    const{Firstname,Lastname,Email,Phone,Age,Role}=req.body;
    // console.log(Lastname,Age);

    try{
        const editable=await User.findByIdAndUpdate(id,{
        Firstname,
        Lastname,
        Email,
        Phone,
        Age,
        Role,

        })
        if(editable){
            res.status(200).json({message:"Edit successful"})
            console.log("successfull");
        }
        else{
            console.log("not successful");
        }

    }catch(err){
        res.status(500).json({message:err.message})
    }
}
exports.managerData=async(req,res,next)=>{
    try{  const managerList=await User.find({Role:"Manager",employees:[]})
    res.status(200).json({data:managerList})

}catch(err){
 res.status(500).json({message:err.message})
}
  

}
exports.employeeData=async(req,res,next)=>{
    try{  const employeeList=await User.find({Role:"Employee"})
    const newList=employeeList.filter((p)=>!p.managerId)
    // console.log(newList);
    res.status(200).json({data:newList})

}catch(err){
 res.status(500).json({message:err.message})
}
  

}
exports.postDepartment=async(req,res,next)=>{
    const {department,manager,employee}=req.body;
    console.log(manager);
    try{
        const userData=await User.find({managerId:manager,department:department})
        if(userData.length>0){
            res.status(500).json({message:"Already present"})
        }
        else{
            const data=await new Department({department_name:department,manager:{managerId:manager},employee: employee.map((employeeId) => ({ employeId: employeeId._id })),})
        const savedDepartment = await data.save();
        const employeeSave=await User.findByIdAndUpdate(manager,{department:department,employees: employee.map((employeeId) => ({ employeeId: employeeId._id }))})
        for(let i=0;i<employee.length;i++){
            const managerSave=await User.findByIdAndUpdate({_id:employee[i]._id },{department:department,managerId:manager})
        }
        }
        
        

        
        res.status(200).json({message:"Department created"})
        console.log("yes");

    }catch(err){
        res.status(500).json({message:err.message})
        console.log(err.message);
    }
}
exports.getDepartments=async(req,res,next)=>{
        const departmentData=await Department.find();
        const id=departmentData[0].manager[0].managerId;
        let emp=departmentData[0].employee.map(employee=>employee.employeId)
        console.log(emp);
        let newview=[];
        const view=await User.findById(id)
        console.log(emp.length);
        for(let i=0;i<emp.length;i++){
        let a=0
        const dc=emp[a]
        const data=await User.findById(dc)
        a++;
        console.log(data);

        }
        console.log(view);

    }
 exports.getCalender=async(req,res,next)=>{
    const currentDate=req.body.date;
    const newattendence=req.body.attendence;
    const id=req.body.userId;
    // console.log(currentDate,newattendence,id);
   const databaseDate=await Attendence.findOne({date:currentDate,userId:id})
//    console.log(databaseDate);
   if(!databaseDate){
   try{
    const checkDate=await Attendence.create({date:currentDate, attendence:newattendence,userId:id})
    // console.log(checkDate);
    res.status(200).json({data:checkDate})

   }catch(err){
    res.status(500).json({message:err.message})
   }

}else{
    // console.log("failded");
    res.status(421).json({message:"You already perform this task"})
}
    
 }
 exports.postLeave=async(req,res,next)=>{
    const {id,start,end,comment,approve}=req.body;
    if(id){
    try{
        const findUser=await User.findById(id)
        const managerId=findUser.managerId;
        const userName=findUser.Firstname;
        const leaveFunction=await Leave.create({userId:id,managerId:managerId,Name:userName,fromDate:start,toDate:end,comment:comment,approve:approve})
        const newId=leaveFunction._id;
        // console.log(id);
       
        if(leaveFunction){
        const leaveManager=await User.findByIdAndUpdate({_id:managerId},{$push:{leaves:{leaveId:newId,name:userName}}})
        // console.log(leaveManager);
        }
        res.status(200).json({message:"Send for the leave"})

    }catch(err){
        res.status(500).json({message:err.message})
    }
}
    


 }
 exports.getLeave=async(req,res,next)=>{
    const {id}=req.params
    // console.log(id);
    
    try{
    // for(let i=0;i<newData.)
    const leaveData=await Leave.find({managerId:id});
    // console.log(leaveData);
    res.status(200).json({data:leaveData})

    }catch(err){
        res.status(500).json({message:err.message})
    }
}
 
 exports.deleteLeave=async(req,res,next)=>{
    const {id}=req.params;
    // console.log(id);
    try{
    const data=await Leave.deleteOne({userId:id})
    if(data){
        res.status(200).json({message:"Application Rejected"})
    }
    
    }catch(err){
        console.log("nothing");
        res.status(500).json({message:err.message})
    }
 }
 
