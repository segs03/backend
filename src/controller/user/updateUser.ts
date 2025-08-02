import { Request, Response } from "express";
import { User } from "../../models/user/users";



// update user's details
export const updateUser = async (req: Request, res: Response) => {
    const { email, phone } = req.body;

    console.log(phone);

    // Validate request data
    if (!email || !phone) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });

        if (!existingUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        await User.update({
            phone,
        }, { where: { email } });

        res.status(200).json({
            message: 'update successful',
        });
        return;

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
        return;
    }
};