import jwt from 'jsonwebtoken';
import { User } from '../../models/user/users';
import { config } from '../../config/config';
import { Request, Response } from "express";
import { RefreshToken } from '../../models/token/refreshToken';



const { JWT_SECRET, REFRESH_TOKEN_SECRET } = config;


export const generateRefreshToken = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        res.status(400).json({ error: "provide refresh token" });
        return;
    }

    // find the refresh token in the database
    const storedToken = await RefreshToken.findOne({ where: { token: refreshToken } });

    if (!storedToken) res.status(403).json({ message: 'Invalid refresh token' });

    let userId: any;

    // verify the refresh token
    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err: any, decoded: any) => {
        if (err) res.status(403).json({ message: "Invalid refresh token" });
        userId = decoded.userId;
    });

    try {
        await User.findOne({ where: { id: userId } }).then((user: any) => {
            // Generate a new access token
            const token = jwt.sign({ id: user.id, email: user.email, firstname: user.firstname, lastname: user.lastname }, JWT_SECRET, { expiresIn: '1h' }); // Token will expire in 1 hour

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
    } catch {
        throw new Error("User not found");
    }
}


