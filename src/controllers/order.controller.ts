import { Request, Response } from 'express';
import orderService from '../services/order.service';

const orderController = {
  async list(req: Request, res: Response) {
    const data = await orderService.list();
    res.status(200).json(data);
  },

};

export default orderController;