const router = require('express').Router();
const User = require('../models/user-model.js')
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../validation.js');
const bcrypt = require('bcryptjs');
// const {loginValidation} = require('../validation')


//register

router.post('/register', async (req,res) => {

    // VALIDATE THE DATA TO MAKING A USER
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
   
    //Checking if the user is already in the database
   const emailExist = await User.findOne({ email : req.body.email });
   if(emailExist) return res.status(400).send('Emaile alredy exist')

   //Hash the Password 
   const salt = await bcrypt.genSalt(10);
   const hashedpassword = await bcrypt.hash(req.body.password, salt);
   console.log(salt);

   
    // Create the user 
    const user = new User ({ 
             password: hashedpassword,
             name: req.body.name,
             email: req.body.email
        

        });
        try{
            const savedUser = await user.save();
            console.log("ttt")
            res.send(savedUser); 
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

// res.send('Logged In!') 
});

//Token Authorization in 4 Easy Steps
// Request: The person asks for access to a server or protected resource. That could involve a login with a password, or it could involve some other process you specify.
// Verification: The server determines that the person should have access. That could involve checking the password against the username, or it could involve another process you specify.
// Tokens: The server communicates with the authentication device, like a ring, key, phone, or similar device. After verification, the server issues a token and passes it to the user.
// Storage: The token sits within the user's browser while work continues.


module.exports = router ;
