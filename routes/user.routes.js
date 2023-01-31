const {Router} = require('express');
const { checkToken } = require('../miscFunction/miscFunction');
const { postUser,loginUser } = require('../controllers/user.controllers');



const userRouter = Router();


// Route For Adding User

userRouter.post('/add-user',async(req,res)=>{
    try{

        const body = req.body;
        const postedUser = await postUser(body);
        res.send({
            data:"Sucessfully Registered"
        })

    }catch(err){
        res.status(500).send({
            err:err.message
        })
    }
})


//Route for Login User

userRouter.post('/login-user',async(req,res)=>{

    try{

        const body = req.body;
        const token = await loginUser(body);
        res.send({
            token:token
        })

    }catch(err){
        res.send({
            err:err.message
        })
    }


})


//Route For Getting User Details By Token;

userRouter.get('/loggedIn/:token',async(req,res)=>{

    try{
        const token = req.params.token;
        const userDetails = await checkToken(token);
        res.send({
            data:userDetails
        })
    }catch(err){
        res.status(500).send({
            err:err.message
        })
    }




})


module.exports = userRouter;