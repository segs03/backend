import jwt from 'jsonwebtoken';
import { config } from '../../config/config';
import { Request, Response } from "express";



const { JWT_SECRET } = config;

export const verifyToken = async (req: Request, res: Response) => {

    const { token } = req.body;

    if (!token) {
        res.status(403).json({
            message: "No token provided"
        });
        return;
    }

    try {
        // verify the token
        let activeToken = jwt.verify(token, JWT_SECRET);
        res.json({ message: "valid", token: activeToken });
    } catch (e) {
        res.status(400).json({ message: "invalid token:", error: e });
    }
}


