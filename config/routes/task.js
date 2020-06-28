const express=require('express');
const router=express.Router();
const taskController=require('../../controllers/taskControllers');
router.post('/create',taskController.create);
router.get('/find',taskController.find);
module.exports=router;