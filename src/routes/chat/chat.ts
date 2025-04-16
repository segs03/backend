import express from 'express';
// import validateUser from'../middlewares/validateUser';
import{ authenticate }from '../../middlewares/authenticate';





export const chatRouter = express.Router();


// Chat route
chatRouter.post("/chat/message", authenticate)


