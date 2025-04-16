"use strict";
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, generateRefreshToken } = require('../controller/authController');
// const { getAllUsers, getLoggedInUser } = require('../controller/userController');
const validateUser = require('../middlewares/validateUser');
const authenticate = require('../middlewares/authenticate');
// Register route
router.post("/chat/message", authenticate);
module.exports = router;
