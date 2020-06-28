const express=require('express');
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

var taskSchema= new Schema(
    {
        taskName:String,
        listId:{type:mongoose.Schema.Types.ObjectId, ref:'List'},
        description:String,
        dueDate:Date
    }
)

module.exports=mongoose.model('task',taskSchema);