const express=require('express');
const mongoose=require('mongoose');
var listController={};
var List=require('../model/List');
listController.create=(req,res,next)=>{
    List.create(
        {
            listName:req.body.listName,
            boardId: new mongoose.Types.ObjectId(req.body.boardID)
        }
    )
}

listController.find=(req,res,next)=>{
    List.find({},(error,result)=>{
        res.json(result);
    })
}
module.exports=listController;