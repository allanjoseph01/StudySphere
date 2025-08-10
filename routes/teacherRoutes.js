const express = require('express');
const router = express.Router();
const isloggedIn = require('../middlewares/LogInCheck');
const { profile , createClass , uploadassignment } = require('../controllers/teacherController');


router.get('/profile',isloggedIn,profile);

router.post('/create/classroom',isloggedIn,createClass);

router.post('/upload/assignment',isloggedIn,uploadassignment);

module.exports = router;