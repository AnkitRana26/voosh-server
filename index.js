const express =  require('express');
const cors = require('cors');
const connect = require('./database/connect');
const userRouter = require('./routes/user.routes');
const orderRouter = require('./routes/order.routes');



const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(orderRouter);

const PORT = 8080;

connect()
.then((res)=>{
    app.listen(PORT,()=>{
        console.log('Server started at '+PORT);
    })
})
.catch((err)=>{
    console.log(err.message);
})

    





