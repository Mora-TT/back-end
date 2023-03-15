const express = require('express');
const userController = require('../../controller/userController')
const router=express.Router();

// const config = require('../../config/config');


//register

router.post('/register',userController.register);



module.exports =router;