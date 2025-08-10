const express = require('express');
const router = express.Router();
const {signUp , signIn , logout , forgotPassword} = require('../controllers/authController'); 


router.post('/signUp',signUp);

router.post('/signIn',signIn);

router.post('/logout',logout);

router.post('/forgot',forgotPassword);

module.exports = router;