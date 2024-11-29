const Todo=require('../models/Todo');

exports.deleteTodo=async(req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findByIdAndDelete({_id:id});
        res.status(200).json({
            success:true,
            data:todo,
            message:'TODO deleted successfully',
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:'Internal Server Error',
        })
    }
}