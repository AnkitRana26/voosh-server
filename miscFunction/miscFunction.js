const jwt = require('jsonwebtoken');
const userModel = require('../database/user');
require('dotenv').config();
const env = process.env;


const generateToken =(obj)=>{

    // Removing Password from User Object

    if(obj.password){
        delete obj.password;
    }

    // Generating JWT token with Secret Key

    const token = jwt.sign(obj,env.SECRET_KEY);
    return token;

}


const checkToken =async(token)=>{

    // Validating token

    const valid = jwt.verify(token,env.SECRET_KEY);
    if(!valid){
        throw new Error('Invalid JWT Token');
    }
    
    // Find User

    const user = await userModel.findOne({'phone_number':valid['phone_number']});
    if(!user){
        throw new Error('User Not Found');
    }

    return user;
}

module.exports ={generateToken,checkToken}