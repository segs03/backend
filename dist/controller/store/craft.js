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
exports.getCraft = void 0;
exports.createCraft = createCraft;
const category_model_1 = require("../../models/store/category_model");
function createCraft(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, description, price, imageUrl } = req.body;
        console.log(req);
        if (!name || !description || !price || !imageUrl) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        try {
            let newCraft = yield category_model_1.Craft.create({
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
        }
        catch (err) {
            res.status(500).json({ message: `Error: failed to create new craft, ${err}` });
            return;
        }
    });
}
const getCraft = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const craft = yield category_model_1.Craft.findAll({
            attributes: ['id', 'name', 'description', 'price', 'imageUrl']
        });
        res.status(200).json({
            craft
        });
        res.status(200).json({ message: "welcome to craft store" });
        return;
    }
    catch (err) {
        throw new Error("cannot fetch craft item");
    }
});
exports.getCraft = getCraft;
