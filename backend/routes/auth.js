const router = require('express').Router();
const User = require('../models/user-model.js')
const jwt = require('jsonwebtoken');
const {registeValidation, loginValidation} = require('../validation.js');
const bcrypt = require('bcryptjs');
const verifyToken = require("../deletemiddlwere/middlwere");
// const {loginValidation} = require('../validation')


//register
router.post('/register', async (req,res) => { 
// let's validate the data before we make a user 
const {error} = registeValidation(req.body);
// const {error} = Joi.validate(req.body, schema);
// res.send(error.details[0].message);
// if !email or !password or !name --> 400 status and senad a message
if(error) return res.status(400).send({ msg: "Not all fields have been entered." });

// checking if the user is already in the database 
const emailExist = await User.findOne({email: req.body.email});
if (emailExist) return res.status(400).send({msg:'An account with this Email already exists.'});

//hashing the password 
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password, salt);


if (req.body.password !== req.body.passwordCheck ) return res.status(400).send({msg:'Please enter the same password again.'});



//save function
// create a new user 
    const user = new User ({ 
        password: hashedPassword,
        name: req.body.name,
        email: req.body.email
    });

    //the code should wait until this request is finished 
    try{
        const savedUser = await user.save();
        // res.send({user : user._id}); 
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
if (!user) return res.status(400).send({msg:"No account with this email has been registered"});
// checking if password is correct
const validPass = await bcrypt.compare(req.body.password, user.password);
if(!validPass) return res.status(400).send({msg:'Invalid Password'});

//create and assign a TOKEN
const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET );
res.header('auth-tokennnn', token).send({
    token:token,
      user:{
    id: user._id,
    name: user.name,
  },
});
console.log(token)
// res.send('Logged In!')
});


router.delete("/delete",verifyToken, async (req, res) => {
    // console.log(req.user)
    try {
      const deletedUser = await User.findByIdAndDelete(req.user);
      res.send(deletedUser);
    } catch (err) {
      res.status(500).send('error');
    }
  });


//endpoint
// this will not be a private  
  router.post("/tokenIsValid", async (req, res) => {
    try {
      const token = req.header("x-auth-token");
      console.log(token, 'faded')
      if (!token) return res.send(false);
  
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      if (!verified) return res.send(false);
  
      const user = await User.findById(verified._id);
      if (!user) return res.send(false);
  
      return res.send(true);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
  
  router.get("/", verifyToken, async (req, res) => {
    const user = await User.findById(req.user);
    // res.send(user)
    res.send({
      name: user.name,
      id: user._id,
    });
  });




module.exports = router ;