const express = require("express");
const app = express();
require('dotenv').config(); 
const path = require('path');
const cookieParser = require('cookie-parser');

const mongConnect = require('./config/mongoose-connection');
const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");


app.set('view engine' , 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());
app.use("/teacher",teacherRoutes);
app.use("/student",studentRoutes);
app.use("/",authRoutes);

app.get('/',function(req,res){
  res.render('index');
})

app.listen(3000);