//validation
const Joi = require('@hapi/joi')

//registe validation 
const registeValidation = (data) =>{
    const schema ={
    name: Joi.string()
    .min(6)
    .required(),
    email:  Joi.string()
    .min(6)
    .required()
    .email(),
    password: Joi.string()
    .min(6)
    .required()
};
return Joi.validate(data, schema);
}



//login validation 
const loginValidation = (data) =>{
    const schema ={
    email:  Joi.string()
    .min(6)
    .required()
    .email(),
    password: Joi.string()
    .min(6)
    .required()
};
return Joi.validate(data, schema);
};

module.exports.registeValidation = registeValidation;
module.exports.loginValidation = loginValidation;