const {Router} = require('express');
const { postOrder, getOrders } = require('../controllers/order.controllers');
const authentication = require('../middleware/authentication');


const orderRouter = Router();


//Route for Adding Order 

orderRouter.post('/add-order',authentication,async(req,res)=>{

    try{
        const body = req.body;
        const postedOrder = await postOrder(body);
        res.send({
            data:postedOrder
        })
    }catch(err){
        console.log(err.message);
        res.status(500).send({
            err:err.message
        })
    }

})


orderRouter.get('/get-order',authentication,async(req,res)=>{

    try{

        const userId = req.query.user_id;
        const orders = await getOrders(userId);
        res.send({
            data:orders
        })

    }catch(err){

        res.status(500).send({
            err:err.message
        })


    }
})

module.exports =orderRouter