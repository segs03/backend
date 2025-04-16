import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import { NextFunction, Request, Response } from 'express';


const { JWT_SECRET } = config;

// Middleware to authenticate JWT token
export const authenticate = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers["authorization"];  // Authorization format "Bearer <token>"

    if (!token) {
        res.status(403).json({ error: 'Access denied. No token provided.' });
        return;
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.body.user = decoded;  // Attach the decoded user data to the request object
        next();
        return;// Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Invalid token:', error);
    }
};


