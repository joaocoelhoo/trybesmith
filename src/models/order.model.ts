import { RowDataPacket } from 'mysql2';
import { Order } from '../types';
import connection from './connection';

const TABLE = 'Orders';

const orderModel = {
  async list(): Promise<Order[]> {
    const sql = `
      SELECT orders.id AS id, orders.userId AS userId, JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.${TABLE} AS orders
      JOIN Trybesmith.Products AS products ON products.orderId = orders.id
      GROUP BY id, userId 
      ORDER BY userId
    `;
    const [rows] = await connection.query<RowDataPacket[]>(sql, []);
    return rows as Order[];
  },
};

export default orderModel;