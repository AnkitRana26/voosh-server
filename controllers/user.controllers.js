const userModel = require("../database/user");
const bcrypt = require('bcrypt');const { generateToken } = require("../miscFunction/miscFunction");



const postUser =async(body)=>{

    //Checking if User is already registered

    const foundUser = await userModel.findOne({phone_number:body.phone_number});
    if(foundUser){
        throw new Error('Already Registred');
    }

    //Hashing Password

    
    const hashedPassword = bcrypt.hashSync(body.password,10);
    const newDetails = {
        ...body,
        password:hashedPassword
    }


    //Creating New User
    const newUser =await userModel.create(newDetails);
    return newUser;


}

const loginUser=async(body)=>{

    // Checking User registred or not

    const user = await userModel.findOne({phone_number:body.phone_number});
    if(!user){
        throw new Error('User Not Registered');
    }

    // Checking Password 

    const valid = bcrypt.compareSync(body.password,user.password);
    if(!valid){
        throw new Error('Invalid Credentials');
    }

    // Generating Token

    const token = generateToken(user.toJSON());
    return token;
    
}

module.exports ={postUser,loginUser};
