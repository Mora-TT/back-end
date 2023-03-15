const express = require('express');
const router = express.Router();

// // All routes of Postman
// const postManRoutes = require('./api/postMan');
const userRoutes=require('./api/user');
// const postMasterRoutes = require('./postMaster');
// //clerk Routes
// router.use('/clerk',require('./clerk'));

// //postMan routes
// router.use('/postMan', postManRoutes);

// //postmaster routes;
// router.use('/postMaster',postMasterRoutes);
// router.use('/changepassword',require('./changepassword'));
// router.use('/admin',require('./admin'));

//user routes
router.use('/user', userRoutes);

//user event routes
// router.use('/events', postManRoutes);

// //user event membership routes
// router.use('/memberships', postManRoutes);

module.exports = router;
