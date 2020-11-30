const router = require('express').Router();
const User = require('../models/user-model.js')
const jwt = require('jsonwebtoken');
const {registeValidation, loginValidation} = require('../validation.js');
const bcrypt = require('bcryptjs');
// const {loginValidation} = require('../validation')


//register
router.post('/register', async (req,res) => { 
// let's validate the data before we make a user 
const {error} = registeValidation(req.body);
// const {error} = Joi.validate(req.body, schema);
// res.send(error.details[0].message);
if(error) return res.status(400).send(error.details[0].message);

// checking if the user is already in the database 
const emailExist = await User.findOne({email: req.body.email});
if (emailExist) return res.status(400).send('Email already Exists');

//hashing the password 
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password, salt);
console.log(salt)







//save function
// create a new user 
    const user = new User ({ 
        password: hashedPassword,
        name: req.body.name,
        email: req.body.email
    });

    //the code should wait until this make request is finished 

    try{
        const savedUser = await user.save();
        res.send({user : user._id}); 
    }catch(err){ 
        res.status(400).send(err);
    }
    
});


//login

router.post('/login', async (req,res)=>{
// let's validate the data before we make a user 
const {error} = loginValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);
// checking if the email is already exists
const user = await User.findOne({email: req.body.email});
if (!user) return res.status(400).send("Email doesn't exist");
// checking if password is correct
const validPass = await bcrypt.compare(req.body.password, user.password);
if(!validPass) return res.status(400).send('Invalid Password');

//create and assign a TOKEN
const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET );
res.header('auth-tokennnn', token).send(token);
console.log(token)

// res.send('Logged In!')
});



module.exports = router ;
