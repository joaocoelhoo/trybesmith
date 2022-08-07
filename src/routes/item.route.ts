import { Router } from 'express';
import itemController from '../controllers/item.controller';

const itemRoutes = Router();

itemRoutes.post('/', itemController.create);

export default itemRoutes;
