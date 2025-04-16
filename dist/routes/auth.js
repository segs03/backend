"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const validateUser_1 = __importDefault(require("../middlewares/validateUser"));
const authenticate_1 = __importDefault(require("../middlewares/authenticate"));
const authController_1 = require("../controller/authController");
const userController_1 = require("../controller/userController");
const { registerUser, loginUser, generateRefreshToken } = authController_1.auth;
const { getAllUsers, getLoggedInUser } = userController_1.users;
const router = express_1.default.Router();
// Register route
router.post("/register", validateUser_1.default, registerUser);
router.post("/login", validateUser_1.default, loginUser);
router.get("/users/all_users", authenticate_1.default, getAllUsers);
router.get('/users/me', authenticate_1.default, getLoggedInUser);
router.post("/token", generateRefreshToken);
module.exports = router;
