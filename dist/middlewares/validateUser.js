"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const joi_1 = __importDefault(require("joi"));
const validateUser = (req, res, next) => {
    const schema = joi_1.default.object({
        firstname: joi_1.default.string().max(100),
        lastname: joi_1.default.string().max(100),
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(6).required(),
        confirmPassword: joi_1.default.string().min(6)
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }
    next();
    return;
};
exports.validateUser = validateUser;
