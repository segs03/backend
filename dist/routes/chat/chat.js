"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRouter = void 0;
const express_1 = __importDefault(require("express"));
// import validateUser from'../middlewares/validateUser';
const authenticate_1 = require("../../middlewares/authenticate");
exports.chatRouter = express_1.default.Router();
// Chat route
exports.chatRouter.post("/chat/message", authenticate_1.authenticate);
