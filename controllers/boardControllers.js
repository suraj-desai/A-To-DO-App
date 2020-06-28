const express=require('express');
var boardController = {};
const Board=require('../model/Board');
boardController.create=(req,res,next)=>{ 
        Board.create(
            {
                boardName:req.body.boardName
            }
        )
}

boardController.find=(req,res,next)=>{
    Board.find({},(error,result)=>{
        res.json(result);
    })
}

module.exports=boardController;