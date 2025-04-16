"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../config/config");
const { JWT_SECRET } = config_1.config;
const verifyToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.body;
    if (!token) {
        res.status(403).json({
            message: "No token provided"
        });
        return;
    }
    try {
        // verify the token
        let activeToken = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        res.json({ message: "valid", token: activeToken });
    }
    catch (e) {
        res.status(400).json({ message: "invalid token:", error: e });
    }
});
exports.verifyToken = verifyToken;
