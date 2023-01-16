import { ResultSetHeader, RowDataPacket } from 'mysql2';

import { Login, User } from '../interfaces';
import connection from './connection';

async function createUser(user: User) {
  const { username, vocation, level, password } = user;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  return { id: insertId, ...user };
}

async function userLogin(login: Login) {
  const { username, password } = login;

  const [[rows]] = await connection.execute<RowDataPacket[] & User[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
  );

  return rows;
}

export { createUser, userLogin };
