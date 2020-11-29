const router = require('express').Router();
const User = require('../models/user-model.js')
const {registeValidation} = require('../validation.js');
// const {loginValidation} = require('../validation')



router.post('/register', async (req,res) => { 
// let's validate the data before we make a user 
const {error} = registeValidation(req.body)
// const {error} = Joi.validate(req.body, schema);
// res.send(error.details[0].message);
if(error) return res.status(400).send(error.details[0].message);

// checking if the user is already in the database 
const emailExist = await User.findOne({email: req.body.email});
if (emailExist) return res.status(400).send('Email already Exists');

//save function
// create a new user 
    const user = new User ({ 
        password: req.body.password,
        name: req.body.name,
        email: req.body.email
    });

    //the code should wait until this make request is finished 

    try{
        const savedUser = await user.save();
        // console.log("ttt")
        res.send(savedUser); 
    }catch(err){ 
        res.status(400).send(err);
    }
    
});

module.exports = router ;
