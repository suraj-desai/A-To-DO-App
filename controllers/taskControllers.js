const express=require('express');

var taskController={};
var Task=require('../model/Task');
taskController.create=(req,res,next)=>{
    Task.create(
        {
        taskName:req.body.taskName,
        listId: new mongoose.Types.ObjectId('req.body.listId'),
        description:req.body.disc,
        dueDate:Date
        }
    )
}

taskController.find=(req,res,next)=>{
    Task.find({},(error,result)=>{
        res.json(result);
    })
}
module.exports=taskController;