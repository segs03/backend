import express from 'express';
import { authenticate } from '../../middlewares/authenticate';
import { getFood } from '../../controller/store/food';
import { getHair } from '../../controller/store/hair';
import { getOil } from '../../controller/store/oil';
import { getDrink } from '../../controller/store/drink';
import { getCraft, createCraft } from '../../controller/store/craft';
import { getFashion } from '../../controller/store/fashion';
import { getPastery } from '../../controller/store/pastery';
import { validateStore } from '../../middlewares/validate_store';



const storeRouter = express.Router();


// Store Post route 
storeRouter.post("/food", authenticate, getFood);
storeRouter.post("/hair", authenticate, getHair);
storeRouter.post("/oil", authenticate, getOil);
storeRouter.post("/drink", authenticate, getDrink);
storeRouter.post("/craft", validateStore, createCraft);
storeRouter.post("/fashion", authenticate, getFashion);
storeRouter.post("/pastery", authenticate, getPastery);




// Store get route
storeRouter.get("/foods", authenticate, getFood);
storeRouter.get("/hairs", authenticate, getHair);
storeRouter.get("/oils", authenticate, getOil);
storeRouter.get("/drinks", authenticate, getDrink);
storeRouter.get("/crafts", getCraft);
storeRouter.get("/fashions", authenticate, getFashion);
storeRouter.get("/pasterys", authenticate, getPastery);

export { storeRouter };

