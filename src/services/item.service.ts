import Joi from 'joi';
import itemModel from '../models/item.model';
import { CreateItem, Item } from '../types';

const itemService = {
  async validateAddBody(unknown: unknown): Promise<CreateItem> {
    const schema = Joi.object<CreateItem>({
      name: Joi.string().required(),
      amount: Joi.string().required(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async create(item: CreateItem): Promise<Item> {
    const result = await itemModel.create(item);
    return result;
  },

  async list(): Promise<Item[]> {
    const result = await itemModel.list();
    return result;
  },
};

export default itemService;
