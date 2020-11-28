const router = require('express').Router();
const User = require('../models/user.model')

router.post('/register',(req,res) => {
    res.send('register');
});

module.exports = router ;
