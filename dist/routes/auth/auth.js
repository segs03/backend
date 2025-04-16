"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const validateUser_1 = require("../../middlewares/validateUser");
const authController_1 = require("../../controller/auth/authController");
exports.authRouter = (0, express_1.Router)();
// Register route
exports.authRouter.post("/register", validateUser_1.validateUser, authController_1.registerUser);
exports.authRouter.post("/login", validateUser_1.validateUser, authController_1.loginUser);
