"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const authenticate_1 = require("../../middlewares/authenticate");
const userController_1 = require("../../controller/user/userController");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.get("/all", authenticate_1.authenticate, userController_1.getAllUsers);
userRouter.get('/me', authenticate_1.authenticate, userController_1.getLoggedInUser);
