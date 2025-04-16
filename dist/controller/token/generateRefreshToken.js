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
exports.generateRefreshToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../../models/user/users");
const config_1 = require("../../config/config");
const { JWT_SECRET, REFRESH_TOKEN_SECRET } = config_1.config;
const generateRefreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.body;
    // find the refresh token in the database
    const storedToken = yield refreshToken.findOne({ where: { token: refreshToken } });
    if (!storedToken)
        res.status(403).json({ message: 'Invalid refresh token' });
    let userId;
    // verify the refresh token
    jsonwebtoken_1.default.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err)
            res.status(403).json({ message: "Invalid refresh token" });
        userId = decoded.userId;
    });
    try {
        yield users_1.User.findOne({ where: { id: userId } }).then((user) => {
            // Generate a new access token
            const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, firstname: user.firstname, lastname: user.lastname }, JWT_SECRET, { expiresIn: '1h' }); // Token will expire in 1 hour
            res.json({
                message: "Token refreshed Successfully",
                user: {
                    id: user.id,
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname
                },
                token,
                refreshToken
            });
            return;
        });
    }
    catch (_a) {
        throw new Error("User not found");
    }
});
exports.generateRefreshToken = generateRefreshToken;
