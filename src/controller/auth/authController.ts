import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../models/user/users';
import { config } from '../../config/config';
import { Request, Response } from "express";
import { generateRefreshToken } from '../../helper/gen_refresh_token';




const { JWT_SECRET } = config;


// Register User
export const registerUser = async (req: Request, res: Response) => {
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
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }

        // Create new user
        const newUser = await User.create({
            firstname,
            lastname,
            email,
            password,
        });

        // Save the user to the database
        newUser.save();

        // Create JWT token (optional for registration, used for login)
        const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            message: 'Registration successful',
            token,
        });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
        return;
    }
};


// login User
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: "All fields are required" });
    }


    try {
        // 1. Check if the user exists in the database
        const user = await User.findOne({ where: { email } });

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        // 2. Compare the password with the stored hash using bcrypt
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            res.status(400).json({ error: 'Invalid credentials' });
            return;
        }

        // 3. Generate a JWT token for the user
        const token = jwt.sign(
            { id: user.id, email: user.email, firstname: user.firstname, lastname: user.lastname },
            JWT_SECRET,
            { expiresIn: '1h' } // Token will expire in 1 hour
        );

        let refreshToken = await generateRefreshToken(user);

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

    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
    }
};






