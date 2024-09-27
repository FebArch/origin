const express = require('express');

// controllers
const {handleHomeGetReq, handleHomePostReq, handleSignupGetReq, handleSignupPostReq, handleLoginGetReq, handleLoginPostReq, handleProfileGetReq, handleProfilePostReq} = require('../controllers/users')

let router = express.Router();

router.route('/').get(handleHomeGetReq).post(handleHomePostReq);
router.route('/signup').get(handleSignupGetReq).post(handleSignupPostReq);
router.route('/login').get(handleLoginGetReq).post(handleLoginPostReq);
router.route('/profile').get(handleProfileGetReq).post(handleProfilePostReq);

module.exports = router;