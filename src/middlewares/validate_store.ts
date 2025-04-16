import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';



export const validateStore = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        name: Joi.string().max(100).required(),
        description: Joi.string().max(100),
        price: Joi.number().max(999999).required(),
        imageUrl: Joi.string().min(100).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }

    next();
};

