import { ResultSetHeader } from 'mysql2';
import { User } from '../types';
import connection from './connection';

const TABLE = 'Users';

const userModel = {
  async create(user: User): Promise<number> {
    const sql = `
      INSERT INTO Trybesmith.${TABLE} (username, classe, level, password)
      VALUES (?, ?, ?, ?)
    `;
    const [{ insertId }] = await connection
      .query<ResultSetHeader>(sql, [user.username, user.classe, user.level, user.password]);
    return insertId;
  },

};

export default userModel;