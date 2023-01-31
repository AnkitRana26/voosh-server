const {checkToken} = require('../miscFunction/miscFunction')

const authentication = async(req,res,next) => {

    try{
        
        const token = req.headers.token;
        const user = await checkToken(token);
        // If Token is Valid then Move Next
        
        next();
    }catch(err){
        console.log(err.message);
        res.status(500).send({
            err:err.message
        })
    }


}


module.exports = authentication;