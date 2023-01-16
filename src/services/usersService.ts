import { User } from '../interfaces';
import usersModel from '../models/usersModel';
import generateToken from '../auth/jwt';

async function createUser(user: User) {
  const newUser = await usersModel.createUser(user);

  const { password, ...data } = newUser;

  const token = generateToken(data as User);

  return token;
}

export default { createUser };
