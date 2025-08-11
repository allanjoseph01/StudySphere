const express = require('express');
const router = express.Router();
const userModal = require('../models/user');
const isloggedIn = require('../middlewares/LogInCheck');

router.get('/profile',isloggedIn,async function(req,res){
  let user = await userModel.findOne({email:req.user.email});
  res.render('profile',{user});
});

module.exports = router;