import express from 'express';
import itemsRoutes from './routes/item.route';

const app = express();

app.use(express.json());
app.use('/products', itemsRoutes);

export default app; 
