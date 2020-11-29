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



//save function
    const user = new User ({ 
        password: req.body.password,
        name: req.body.name,
        email: req.body.email

    });

    try{
        const savedUser = await user.save();
        // console.log("ttt")s
        res.send(savedUser); 
    }catch(err){ 
        res.status(400).send(err);
    }
    
});

module.exports = router ;
