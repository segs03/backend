"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStore = void 0;
const joi_1 = __importDefault(require("joi"));
const validateStore = (req, res, next) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().max(100).required(),
        description: joi_1.default.string().max(100),
        price: joi_1.default.number().max(999999).required(),
        imageUrl: joi_1.default.string().min(100).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }
    next();
};
exports.validateStore = validateStore;
