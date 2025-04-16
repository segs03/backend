"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeRouter = void 0;
const express_1 = __importDefault(require("express"));
const authenticate_1 = require("../../middlewares/authenticate");
const food_1 = require("../../controller/store/food");
const hair_1 = require("../../controller/store/hair");
const oil_1 = require("../../controller/store/oil");
const drink_1 = require("../../controller/store/drink");
const craft_1 = require("../../controller/store/craft");
const fashion_1 = require("../../controller/store/fashion");
const pastery_1 = require("../../controller/store/pastery");
const validate_store_1 = require("../../middlewares/validate_store");
const storeRouter = express_1.default.Router();
exports.storeRouter = storeRouter;
// Store Post route 
storeRouter.post("/food", authenticate_1.authenticate, food_1.getFood);
storeRouter.post("/hair", authenticate_1.authenticate, hair_1.getHair);
storeRouter.post("/oil", authenticate_1.authenticate, oil_1.getOil);
storeRouter.post("/drink", authenticate_1.authenticate, drink_1.getDrink);
storeRouter.post("/craft", validate_store_1.validateStore, craft_1.createCraft);
storeRouter.post("/fashion", authenticate_1.authenticate, fashion_1.getFashion);
storeRouter.post("/pastery", authenticate_1.authenticate, pastery_1.getPastery);
// Store get route
storeRouter.get("/foods", authenticate_1.authenticate, food_1.getFood);
storeRouter.get("/hairs", authenticate_1.authenticate, hair_1.getHair);
storeRouter.get("/oils", authenticate_1.authenticate, oil_1.getOil);
storeRouter.get("/drinks", authenticate_1.authenticate, drink_1.getDrink);
storeRouter.get("/crafts", craft_1.getCraft);
storeRouter.get("/fashions", authenticate_1.authenticate, fashion_1.getFashion);
storeRouter.get("/pasterys", authenticate_1.authenticate, pastery_1.getPastery);
