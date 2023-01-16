import { ResultSetHeader } from 'mysql2';

import { User } from '../interfaces';
import connection from './connection';

async function createUser(user: User) {
  const { username, vocation, level, password } = user;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  return { id: insertId, ...user };
}

export default { createUser };
