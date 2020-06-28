const express=require('express');
const router=express.Router();
const listController=require('../../controllers/listControllers');
router.post('/create',listController.create);
router.get('/find',listController.find);
module.exports=router;