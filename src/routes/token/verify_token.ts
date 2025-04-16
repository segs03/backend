import express from 'express';
import { verifyToken } from '../../controller/token/verify_token';


export const verifyTokenRouter = express.Router();
verifyTokenRouter.post("/verify-token", verifyToken);

