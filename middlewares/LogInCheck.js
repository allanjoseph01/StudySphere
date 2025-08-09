const jwt = require('jsonwebtoken');
const secretkey = process.env.JWT_SECRET;

let isLoggedIn = function (req,res,next){
  if(req.cookies.token === ""){
    res.redirect("/signIn");
  }else{
    let data = jwt.verify(req.cookies.token,secretkey);
    req.user = data;
    next();
  }
}

module.exports = isLoggedIn;