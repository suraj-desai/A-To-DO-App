const express=require('express');
const app=express();
const path=require('path');
const cookie=require('cookie-parser');
const bodyParser=require('body-parser');
require('./config/db/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var indexRouter=require('./config/routes/index.js');
var listRouter=require('./config/routes/list.js');
var taskRouter=require('./config/routes/task.js');

app.use('/',indexRouter);
app.use('/list/',listRouter);
app.use('/task/',taskRouter);

const PORT= 5000;

app.listen(PORT,(req,res)=>{
    console.log(`Server started on port: ${PORT}`);
})
