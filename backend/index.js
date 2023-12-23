const express=require('express');
const cors=require('cors');


const connectDB =require('./mongodb');


const app=express();
app.use(cors());
app.use(express.json());


connectDB();



const port=process.env.Port || 3000;



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});