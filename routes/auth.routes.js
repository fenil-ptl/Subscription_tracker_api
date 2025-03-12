import {Router} from 'express';

import { signUp, signIn , signOut } from '../controllers/auth.controller.js '; // made connection between auth route.js and controller.js 

const authRouter =  Router();

// post req= past some data 

// path : /api/v1/auth/sign-up (post)= this is basicaly post route 
authRouter.post('/sign-up',signUp );
authRouter.post('/sign-in',signIn);
authRouter.post('/sign-out',signOut);

export default authRouter;