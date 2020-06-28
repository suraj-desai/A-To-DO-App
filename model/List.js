const express=require('express');

const mongoose=require('mongoose');

const Scheme=mongoose.Schema;

var listSchema = new Scheme(
     {
        listName:String,
        boardId:{type:mongoose.Schema.Types.ObjectId, ref:'Board'}
     }
     
)
var List=mongoose.model('List',listSchema);
module.exports=List;