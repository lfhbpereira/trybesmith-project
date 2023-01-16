import { Login, User } from '../interfaces';
import * as usersModel from '../models/usersModel';
import generateToken from '../auth/jwt';

async function createUser(user: User) {
  const newUser = await usersModel.createUser(user);

  const { password, ...data } = newUser;

  const token = generateToken(data as User);

  return token;
}

async function userLogin(login: Login) {
  const user = await usersModel.userLogin(login);

  const passcode = user?.password === login.password;

  if (!user || !passcode) {
    return { type: 'NOT_FOUND', message: 'Username or password invalid' };
  }

  const { password, ...data } = user;

  const token = generateToken(data as User);

  return { type: null, message: token };
}

export { createUser, userLogin };
