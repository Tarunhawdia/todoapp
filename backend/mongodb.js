const mongoose = require("mongoose");

const connectDB=async()=>{
    const conn=await mongoose.connect("mongodb://127.0.0.1:27017/todoapp",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("MongoDB connected"))
    .catch((err)=>console.log(err));
}

module.exports=connectDB;