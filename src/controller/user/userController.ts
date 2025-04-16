import { Request, Response } from "express";
import { User } from "../../models/user/users";


// Fetch all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'firstname', 'lastname', 'created_at']
    });

    res.status(200).json({
      users
    });
    return;
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
    return;
  }
};


// Fetch logged-in user's details
export const getLoggedInUser = (req: Request, res: Response) => {
  // req.user contains the decoded user data from the JWT token (set by the authenticate middleware)
  try {
    const { user } = req.body;

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      }
    });
    return;

  } catch (e) {
    console.error('Error fetching users:', e);
    res.status(500).json({ error: 'Failed to fetch users' });
    return;
  }
};


