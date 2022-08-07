import { Router } from 'express';
import itemController from '../controllers/item.controller';

const itemRoutes = Router();

itemRoutes.post('/', itemController.create);
itemRoutes.get('/', itemController.list);

export default itemRoutes;
