import { Request, Response } from "express";
import { Craft } from "../../models/store/category_model";



export async function createCraft(req: Request, res: Response) {
    const { name, description, price, imageUrl } = req.body;

    console.log(req);

    if (!name || !description || !price || !imageUrl) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }

    try {
        let newCraft = await Craft.create({
            name,
            description,
            price,
            imageUrl
        });

        newCraft.save();

        res.status(201).json({
            message: "Craft added successfully"
        });
        return;

    } catch (err) {
        res.status(500).json({ message: `Error: failed to create new craft, ${err}` });
        return;
    }
}

export const getCraft = async (req: Request, res: Response) => {
    try {
        const craft = await Craft.findAll({
            attributes: ['id', 'name', 'description', 'price', 'imageUrl']
        });

        res.status(200).json({
            craft
        });

        res.status(200).json({ message: "welcome to craft store" });
        return;
    } catch (err) {
        throw new Error("cannot fetch craft item")
    }
}



