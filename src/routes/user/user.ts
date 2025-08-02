import express from 'express';
import { authenticate } from '../../middlewares/authenticate';
import { getAllUsers, getLoggedInUser } from "../../controller/user/userController";
import { createAdress } from '../../controller/user/address';
import { updateUser } from '../../controller/user/updateUser';
import { validateUpdateUser } from '../../middlewares/validateUser';



const userRouter = express.Router();


userRouter.get("/all", authenticate, getAllUsers);

userRouter.get('/me', authenticate, getLoggedInUser);

userRouter.post('/address', authenticate, createAdress);

userRouter.post('/update-user', validateUpdateUser, updateUser);




export { userRouter };