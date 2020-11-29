const router = require('express').Router();
const User = require('../models/user-model.js')

router.post('/register', async (req,res) => {
    console.log(req.body)
    const user = new User ({ 
         password: req.body.password,
        name: req.body.name,
        email: req.body.email
       

    })
    try{
        const savedUser = await user.save();
        console.log("ttt")
        res.send(savedUser); 
    }catch(err){ 
        res.status(400).send(err);
    }
    
});

module.exports = router ;
