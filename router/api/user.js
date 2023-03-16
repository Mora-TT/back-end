const express = require('express');
const userController = require('../../controller/userController')
const router=express.Router();


//register
router.post('/register',userController.register);
//get all entries 
router.get('/entries',userController.getEntries);



module.exports =router;