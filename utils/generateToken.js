const jwt = require('jsonwebtoken');
const secretkey = process.env.JWT_SECRET;

function generateToken(user){
  return jwt.sign({email : user.email , userid : user._id},secretkey);
}

module.exports = generateToken;