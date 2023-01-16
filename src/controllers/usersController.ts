import { Request, Response } from 'express';

import { User } from '../interfaces';
import * as usersService from '../services/usersService';

async function createUser(req: Request, res: Response) {
  const user = req.body as User;

  const token = await usersService.createUser(user);

  return res.status(201).json({ token });
}

async function userLogin(req: Request, res: Response) {
  const login = req.body;

  const { type, message } = await usersService.userLogin(login);

  if (type) {
    return res.status(401).json({ message });
  }

  return res.status(200).json({ token: message });
}

export default { createUser, userLogin };
