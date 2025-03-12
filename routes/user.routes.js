import { Router } from 'express';
import { getUsers ,getUser} from '../controllers/user.controller.js';
import authorize from '../middleware/auth.middleware.js'
import errorMiddleware from '../middleware/error.middleware.js';

const userRouter=Router();


// first  router get all the users 

// GET/users =  get all users
// GET/users/:id =  get all users by id 

// we can have multiple routes with same end point but with diff http verbs 

// get = for retrive data from server 
// post = send data to server like creating user 
// put = update user info 
userRouter.get('/',getUsers);

userRouter.get('/:id',authorize, getUser);

userRouter.post('/',(req,res)=>res.send({title: ' Create new  users'}));

userRouter.put('/:id',(req,res)=>res.send({title: ' Update users'}));

userRouter.delete('/:id',(req,res)=>res.send({title: 'Delte users'}));

export default userRouter;