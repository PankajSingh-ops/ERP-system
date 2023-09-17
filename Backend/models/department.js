const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const department=new Schema({
    department_name:{
        type:String,
        required:true,
    },
    manager:[{
        managerId: {
            type: Schema.Types.ObjectId,
            required: true,
          },
}],
    employee:[{
        employeId:{
            type: Schema.Types.ObjectId,
            
        }

        
    }]


})
module.exports=new mongoose.model("department",department)