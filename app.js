import express from 'express';
import cookieParser  from 'cookie-parser';

import {PORT} from './config/env.js'

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';


const app  = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/subscription',subscriptionRouter);
app.use(errorMiddleware);


// app .get is first route , but we can't able to access it without listeing it to servet 

app.get('/', (req, res) =>{
    res.send( ' Welcome to subscription tracker API by Fenil Patel developer ');
});


// for above req we need to make our server listen for requesting to access 

app.listen(PORT  ,async ()=>{
    console.log(`Subscription tracker is running on the  http://localhost:${PORT}`);

    await connectDatabase();
});

export default app; 