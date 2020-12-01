const router = require('express').Router();
const verify = require('./verifyTokin.js');

router.get('/',verify, (req,res)=>{
    // res.json({
    //     posts: {
    //     title: 'my first post',
    //     description: 'random data you shouldnt access without being logged in'
    //     }
    // });

    res.send(req.user);
    // User.findbyone({_id: req.user})
});




module.exports = router ;

