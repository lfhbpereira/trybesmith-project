import { Request, Response } from 'express';

import { User } from '../interfaces';
import usersService from '../services/usersService';

async function createUser(req: Request, res: Response) {
  const user = req.body as User;

  const token = await usersService.createUser(user);

  res.status(201).json({ token });
}

export default { createUser };
