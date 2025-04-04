import { Router } from 'express';

const subscriptionRouter=Router();

subscriptionRouter.get('/',(req,res)=>res.send({title:'get all subscriptions '}));

subscriptionRouter.get('/:id',(req,res)=>res.send({title:'get subscriptions details '}));

subscriptionRouter.post('/',(req,res)=>res.send({title:' CREATE  subscriptions '}));

subscriptionRouter.put ('/:id',(req,res)=>res.send({title:'UPDATE subscriptions '}));

subscriptionRouter.delete('/',(req,res)=>res.send({title:' DELETE subscriptions '}));

subscriptionRouter.get('/users/:id',(req,res)=>res.send({title:'GET all user subscriptions '}));

subscriptionRouter.put('/:id/cancel',(req,res)=>res.send({title:'CANCEL  subscriptions '}));

subscriptionRouter.get('/upcoming-renewals',(req,res)=>res.send({title:'get upcoming renewals '}));

export default subscriptionRouter;
