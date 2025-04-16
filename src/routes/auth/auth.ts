import { Router } from 'express';
import { validateUser } from '../../middlewares/validateUser';
import { registerUser, loginUser } from "../../controller/auth/authController";




export const authRouter = Router();

// Register route
authRouter.post("/register", validateUser, registerUser);

authRouter.post("/login", validateUser, loginUser);



