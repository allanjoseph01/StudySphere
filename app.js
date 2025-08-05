const express = require("express");
const app = express();
const path = require('path');

const mongConnect = require('./config/mongoose-connection');
const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
require('dotenv').config();


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