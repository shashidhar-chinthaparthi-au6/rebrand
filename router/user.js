const express = require('express');
const { RegisterEmail, checkOtp, registerDetails, login }  = require('../controller/User');

const router = express.Router();

router.post('/signup/email', RegisterEmail)

router.post('/signup/otp/:emailId', checkOtp)

router.post('/signup/details/:emailId', registerDetails)

router.post('/login', login);

module.exports = router;