const router = require('express').Router();
const User = require('../models/user-model.js')
const bcrypt = require('bcryptjs');
const { registerValidation } = require('../validation')


router.post('/register', async (req,res) => {

    // VALIDATE THE DATA TO MAKING A USER
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
   
    //Checking if the user is already in the database
   const emailExist = await User.findOne({ email : req.body.email });
   if(emailExist) return res.status(400).send('Emaile alredy exist')

   //Hash the Password 
   const salt = await bcrypt.genSalt(10);
   const hashpassword = await bcrypt.hash(req.body.password, salt);

   
    // Create the user 
    const user = new User ({ 
             password: hashpassword,
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
  
    
module.exports = router ;
