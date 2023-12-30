const express=require('express');
const cors=require('cors');
const connectDB =require('./mongodb');
const todoRoutes = require('./routes/todoRoutes'); 


const app=express();
app.use(cors());
app.use(express.json());

app.use('/api', todoRoutes);

connectDB();

const port=process.env.Port || 3000;



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});