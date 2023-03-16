const express = require('express');
const userController = require('../../controller/userController')
const router=express.Router();
const multer = require('multer');
const upload = multer();
//register
router.post('/register',upload.any('pdf'),userController.register);
//get all entries 
router.get('/entries',userController.getEntries);



module.exports =router;