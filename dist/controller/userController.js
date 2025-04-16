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
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const users_1 = require("../models/user/users");
// Fetch all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_1.User.findAll({
            attributes: ['id', 'email', 'firstname', 'lastname', 'created_at']
        });
        res.status(200).json({
            users
        });
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});
// Fetch logged-in user's details
const getLoggedInUser = (req, res) => {
    // req.user contains the decoded user data from the JWT token (set by the authenticate middleware)
    const { user } = req.body;
    // const authToken = req.headers;
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({
        user: {
            id: user.id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            created_at: user.created_at
        }
    });
};
exports.users = { getAllUsers, getLoggedInUser };
