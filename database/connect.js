const mongoose = require('mongoose');


const connect =()=>{
    return new Promise((resolve,reject)=>{
        //Connecting to Database
        mongoose.set('strictQuery', true)
        mongoose.connect('mongodb://127.0.0.1:27017/voosh')
        .then((res)=>resolve('Connected to Database'))
        .catch((err)=>reject('Something went Wrong'))

    })
}

module.exports = connect;