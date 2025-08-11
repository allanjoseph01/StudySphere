
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const userModel = require('../models/user');
const tokenGenerator = require('../utils/generateToken');

module.exports.signUp = async function(req,res){
  // console.log(req.body);
  const {name, username , password , email , role} = req.body;
  // console.log(name,username,password,email,role);
  let user = await userModel.findOne({email})
  if(user){
    return res.status(500).send("user already registered");
  }
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,async (err,hash)=>{
      let user = await userModel.create({
        username,
        email,
        role,
        name,
        password : hash
      });
      let token = tokenGenerator(user);
      res.cookie("token", token);
      res.redirect('/');
    });
  })
}

module.exports.signIn = async function(req,res){
  const {email , password} = req.body;
  let user = await userModel.findOne({email})
  if(!user){
    res.redirect('/signUp');
  }
  
  bcrypt.compare(password,user.password,function(err,result){
    if(result){
      let token = tokenGenerator(user);
      res.cookie("token", token);
      res.status(200).redirect("/profile");
    }else{
      return res.status(500).send("Something went wrong!");
    }
  });
}

module.exports.logout = function(req,res){
  res.cookie("token","");
  res.redirect('/');
};

module.exports.forgotPassword = async function(req,res){
  const {email,newPassword} = req.body;
  let user = await userModel.findOne({email});
  if(!user){
    return res.status(500).send("Something went wrong!");
  }
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(newPassword,salt,async (err,hash)=>{
      user.password = hash;
      await user.save();
      res.redirect('/signIn');
    });
  })
}