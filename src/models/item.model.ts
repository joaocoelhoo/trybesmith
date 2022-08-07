import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

  async list(): Promise<Item[]> {
    const sql = `
      SELECT * 
      FROM Trybesmith.${TABLE}
    `;
    const [rows] = await connection.query<RowDataPacket[]>(sql, []);
    return rows as Item[];
  },
};

export default itemModel;