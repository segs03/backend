import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';


export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        firstname: Joi.string().max(100),
        lastname: Joi.string().max(100),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        confirmPassword: Joi.string().min(6)
    });

    const { error } = schema.validate(req.body);

    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }

    next();
    return;
};

