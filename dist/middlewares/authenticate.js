"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const { JWT_SECRET } = config_1.config;
// Middleware to authenticate JWT token
const authenticate = (req, res, next) => {
    const token = req.headers["authorization"]; // Authorization format "Bearer <token>"
    if (!token) {
        res.status(403).json({ error: 'Access denied. No token provided.' });
        return;
    }
    try {
        // Verify the token
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.body.user = decoded; // Attach the decoded user data to the request object
        next();
        return; // Proceed to the next middleware or route handler
    }
    catch (error) {
        console.error('Invalid token:', error);
    }
};
exports.authenticate = authenticate;
