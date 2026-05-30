import express from 'express'
import { sopControl } from '../controllers/sopController.js';
import protect from '../middlewares/auth.middleware.js';

const sopRouter = express.Router();
sopRouter.post('/',protect,sopControl);

export default sopRouter;