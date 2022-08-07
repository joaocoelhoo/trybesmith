import orderModel from '../models/order.model';
import { Order } from '../types';

const orderService = {
  async list(): Promise<Order[]> {
    const result = await orderModel.list();
    return result;
  },
};

export default orderService;
