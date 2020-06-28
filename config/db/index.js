mongoose=require('mongoose');
mongoose.connect('mongodb+srv://suraj-desai:Olkha@123@cluster0-pvx4h.mongodb.net/<trello>?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection.on('connected',()=>{
    console.log("Trello DB is connected");
});

mongoose.connection.on('error',(error)=>{
    console.log("There is error in DB connection");
})

module.exports=mongoose;