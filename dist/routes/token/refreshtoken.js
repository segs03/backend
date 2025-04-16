"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenRouter = void 0;
const express_1 = __importDefault(require("express"));
const generateRefreshToken_1 = require("../../controller/token/generateRefreshToken");
exports.refreshTokenRouter = express_1.default.Router();
exports.refreshTokenRouter.post("/refresh-token", generateRefreshToken_1.generateRefreshToken);
