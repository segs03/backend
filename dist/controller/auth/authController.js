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
exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const refreshToken_1 = require("../../models/token/refreshToken");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../../models/user/users");
const config_1 = require("../../config/config");
const { JWT_SECRET, REFRESH_TOKEN_SECRET } = config_1.config;
// Register User
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, email, password, confirmPassword } = req.body;
    // Validate request data
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }
    if (password !== confirmPassword) {
        res.status(400).json({ message: 'Passwords do not match' });
        return;
    }
    try {
        // Check if the user already exists
        const existingUser = yield users_1.User.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }
        // Create new user
        const newUser = yield users_1.User.create({
            firstname,
            lastname,
            email,
            password,
        });
        // Save the user to the database
        newUser.save();
        // Create JWT token (optional for registration, used for login)
        const token = jsonwebtoken_1.default.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({
            message: 'Registration successful',
            token,
        });
        return;
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
        return;
    }
});
exports.registerUser = registerUser;
// login User
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email);
    try {
        // 1. Check if the user exists in the database
        const user = yield users_1.User.findOne({ where: { email } });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        // 2. Compare the password with the stored hash using bcrypt
        const isPasswordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordMatch) {
            res.status(400).json({ error: 'Invalid credentials' });
            return;
        }
        // 3. Generate a JWT token for the user
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, firstname: user.firstname, lastname: user.lastname }, JWT_SECRET, { expiresIn: '1h' } // Token will expire in 1 hour
        );
        // 4. Generate a refresh token for the user
        const refreshToken = jsonwebtoken_1.default.sign({ userId: user.id }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
        // 5. Store refresh token in database
        yield refreshToken_1.RefreshToken.create({ token: refreshToken, userId: user.id });
        // 6. Return the user data and the JWT token
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
            },
            token,
            refreshToken
        });
        return;
    }
    catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
    }
});
exports.loginUser = loginUser;
