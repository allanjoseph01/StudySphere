const express = require('express');
const router = express.Router();
const {signUp , signIn , logout , forgotPassword} = require('../controllers/authController'); 


router.get('/signUp',function(req,res){
  res.render('signUp');
});
router.post('/signUp',signUp);

router.post('/signIn',signIn);
router.get('/signIn',function(req,res){
  res.render('signIn');
});

router.post('/logout',logout);

router.post('/forgot',forgotPassword);

module.exports = router;