import { Request, Response } from 'express';
import userService from '../services/user.service';

const userController = {
  async create(req: Request, res: Response) {
    const data = await userService.validateAddBody(req.body);
    const token = await userService.create(data);
    res.status(201).json({ token });
  },

};

export default userController;