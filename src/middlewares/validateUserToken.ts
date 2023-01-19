import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;

function validateUserToken(req: Request, res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const user = jwt.verify(token, secret);
    req.body = { ...req.body, user };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

export default validateUserToken;
