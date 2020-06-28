const express=require('express');

const mongoose=require('mongoose');

const Scheme=mongoose.Schema;

var boardSchema=new Scheme(
     {
         boardName:String
     }
     
)

var Board=mongoose.model('Board',boardSchema);
module.exports=Board;