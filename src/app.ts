import express from 'express';
import itemsRoutes from './routes/item.route';
import orderRoutes from './routes/order.route';
import userRoutes from './routes/user.route';

const app = express();

app.use(express.json());
app.use('/products', itemsRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

export default app; 
