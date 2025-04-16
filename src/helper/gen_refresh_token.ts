import { config } from "../config/config";
import { RefreshToken } from "../models/token/refreshToken";
import jwt from 'jsonwebtoken';



const { REFRESH_TOKEN_SECRET } = config;

export const generateRefreshToken = async (user: any) => {

    // check if the user is an existing user and probably have existing refresh token
    const existingUserHaveRefreshToken = await RefreshToken.findOne({ where: { userId: user.id } });

    let refreshToken: any;

    try {

        if (existingUserHaveRefreshToken?.token != null) {

            // verify the refresh token
            let validRefreshToken = jwt.verify(existingUserHaveRefreshToken.token, REFRESH_TOKEN_SECRET);

            if (validRefreshToken) {
                return refreshToken = existingUserHaveRefreshToken?.token;
            }

        } else {
            // 4. Generate a refresh token for the user
            refreshToken = jwt.sign({ userId: user.id }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

            // 5. Store refresh token in database
            await RefreshToken.create({ token: refreshToken, userId: user.id });
            return refreshToken;
        }

    } catch (error) {
        if (error) {
            // 4. Generate a refresh token for the user
            refreshToken = jwt.sign({ userId: user.id }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

            // 5. Store refresh token in database
            await RefreshToken.create({ token: refreshToken, userId: user.id });
            return refreshToken;
        }
    }
}