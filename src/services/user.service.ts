import Joi from 'joi';
import jwt = require('jsonwebtoken');
import userModel from '../models/user.model';
import { User } from '../types';

const secret = process.env.JWT_SECRET || 'secret';

const userService = {
  async validateAddBody(unknown: unknown): Promise<User> {
    const schema = Joi.object<User>({
      username: Joi.string().required(),
      classe: Joi.string().required(),
      level: Joi.number().required(),
      password: Joi.string().required(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async generateToken(id: number, name: string): Promise<string> {
    const payload = { data: { id, name } };
    const token = jwt.sign(payload, secret);
    return token;
  },

  async create(user: User): Promise<string> {
    const userId = await userModel.create(user);
    const token = await this.generateToken(userId, user.username);
    return token;
  },

};

export default userService;
