import jwt from 'jsonwebtoken';
import { User } from '../../models/user/users';
import { Request, Response } from "express";
import { Address } from '../../models/user/address';





// Register User
export const createAdress = async (req: Request, res: Response) => {
    const { address, userId } = req.body;

    // Validate request data
    if (!userId || !address) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }


    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { id: userId } });
        if (!existingUser) {
            res.status(400).json({ message: 'User Not found' });
            return;
        }

        // Create new user
        const newAddress = await Address.create({
            userId,
            address,
        });

        // Save the user to the database
        newAddress.save();

        res.status(201).json({
            message: 'created successfully',
            address,
        });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
        return;
    }
};