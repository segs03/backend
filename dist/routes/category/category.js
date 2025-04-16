"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const popular_store_category_1 = require("../../controller/category/popular_store_category");
exports.categoryRouter = express_1.default.Router();
// Store route
exports.categoryRouter.post("/category", popular_store_category_1.getPopularStoreCategory);
