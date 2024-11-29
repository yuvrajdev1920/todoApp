const Todo=require('../models/Todo');

exports.getTodoByID=async(req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});
        res.status(200).json({
            success:true,
            data:todo,
            message:'Todo fetched successfully',
        })
    }
    catch(error){
        res.status(500).json({
            success:true,
            error:error.message,
            message:'Internal Server Error',
        })
    }
}