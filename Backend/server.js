const express=require("express")
const app=express();
const mongoose=require("mongoose")
const User=require('./models/users_model')
const adminRouter=require("./routes/admin")
const bodyparser=require('body-parser')
mongoose.connect("mongodb+srv://pankajsinghjethi942:Pankaj%40123@cluster0.rdapkgg.mongodb.net/ERP?retryWrites=true&w=majority")
.then((db) => {
   console.log("Database is started"); 
}).catch((err) => {
    console.log("nOt started");
})

// app.use(express.urlencoded({extended:false}))
app.use(bodyparser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });


app.get("/",(req,res,next)=>{
    res.send("hello")
})
app.use("/api/admin",adminRouter)
app.listen(4000,"localhost",()=>{
    console.log("express started");
})