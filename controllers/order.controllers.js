const orderModel = require("../database/order")


const postOrder =async(body)=>{

    //Creating Order
    const createduser = await orderModel.create(body); 
    return createduser;

}

const getOrders = async(userId)=>{

    //Getting all Orders 
    const orders = await orderModel.find({'user_id':userId});
    return orders;


}


module.exports ={postOrder,getOrders}