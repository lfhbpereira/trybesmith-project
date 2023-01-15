import { User } from '../interfaces';
import * as usersModel from '../models/usersModel';
import generateToken from '../auth/jwt';

export default async function createUser(user: User) {
  const newUser = await usersModel.default(user);

  const { password, ...data } = newUser;

  const token = generateToken(data as User);

  return token;
}
