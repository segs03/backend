import express from 'express';
import { generateRefreshToken } from '../../controller/token/generateRefreshToken';


export const refreshTokenRouter = express.Router();
refreshTokenRouter.post("/refresh-token", generateRefreshToken);  

