// importing Todo
const Todo=require("../models/Todo");

// creating route handler
exports.createTodo=async(req,res) => {
    try{
        // fetch title and description from request body
        const {title,description} = req.body;
        // create a new Todo obj and insert in DB
        const response=await Todo.create({title,description});
        // send JSON response with success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created successfully',
        })
    }
    catch(error){
        console.log(error);
        res.status(200).json({
            success:false,
            data:'Internal server error',
            message:error.message,
        })
    }
}