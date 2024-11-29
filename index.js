// 1-instantiating the server
const express=require('express');
const app=express();

require('dotenv').config();

const PORT=process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes=require('./routes/todos');

// mount API routes
app.use('/api/v1',todoRoutes);

// start server
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})

// connect to the database
const dbConnect=require('./config/database');
dbConnect();

// default Route
app.get('/',(req,res)=>{
    res.send("<h1>This is TODO homepage.</h1>")
})