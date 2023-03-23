const express = require('express');
const userController = require('../../controller/userController')
const router=express.Router();
const multer = require('multer');
var upload = multer({ dest: './uploads/'});
var type = upload.single('recfile');
//register
router.post('/register',type,userController.register);
//get all entries 
router.get('/entries',userController.getEntries);




module.exports =router;