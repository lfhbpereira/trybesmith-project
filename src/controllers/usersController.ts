import { Request, Response } from 'express';

import { User } from '../interfaces';
import * as usersService from '../services/usersService';

export default async function createUser(req: Request, res: Response) {
  const user = req.body as User;

  const token = await usersService.default(user);

  res.status(201).json({ token });
}
