const Todo=require('../models/Todo');

exports.getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message:'Todos fetched successfully',
        })
    }
    catch(error){
        console.log("Error occurred")
        console.log(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:'Internal Server Error',
        });
    }
}