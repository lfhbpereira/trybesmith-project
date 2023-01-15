import jwt from 'jsonwebtoken';

import { User } from '../interfaces';

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig: object = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

export default function generateToken(data: User) {
  const token = jwt.sign({ data }, secret, jwtConfig);

  return token;
}
