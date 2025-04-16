import express from 'express';
import {authenticate} from '../../middlewares/authenticate';
import { getPopularStoreCategory } from '../../controller/category/popular_store_category';



export const categoryRouter = express.Router();


// Store route
categoryRouter.post("/category", getPopularStoreCategory);


