//VALIDATION 
const Joi= require('@hapi/joi'); // import hapi Joi


// A new schema 
// A function that allow us to choose wich schema we want to use .

// Register Validation 
const registerValidation = data => {
        const schema = {
            name: Joi.string()
            .min(6)
            .required(),
            email: Joi.string()
            .min(6)
            .required()
            .email(),
            password:Joi.string()
            .min(6)
            .required()
    };
    return Joi.validate(data, schema); // the validation that will take req.body as a data
};

// Login Validation 
const loginValidation = (data) => {
    const schema = {
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        password:Joi.string()
        .min(6)
        .required()
    };
    return Joi.validate(data, schema); 
};




module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;