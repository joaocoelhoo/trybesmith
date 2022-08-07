import { ResultSetHeader } from 'mysql2';
import { CreateItem, Item } from '../types';
import connection from './connection';

const TABLE = 'Products';

const itemModel = {
  async create(item: CreateItem): Promise<Item> {
    const sql = `
      INSERT INTO Trybesmith.${TABLE} (name, amount)
      VALUES (?, ?)
    `;
    const [{ insertId }] = await connection.query<ResultSetHeader>(sql, [item.name, item.amount]);
    return { id: insertId, ...item } as Item;
  },
};

export default itemModel;