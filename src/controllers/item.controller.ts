import { Request, Response } from 'express';
import itemService from '../services/item.service';

const itemController = {
  async create(req: Request, res: Response) {
    const data = await itemService.validateAddBody(req.body);
    const item = await itemService.create(data);
    res.status(201).json(item);
  },

};

export default itemController;