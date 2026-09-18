import express, { Request, Response } from 'express';
import cors from 'cors';
import { properties } from './data';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Logger middleware (по-взрослому логируем запросы)
app.use((req: Request, res: Response, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Роут списка с имитацией долгой загрузки (чтобы на фронте увидеть красивые скелетоны)
app.get('/api/properties', async (req: Request, res: Response) => {
  try {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(800); // Искусственная задержка
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API Сервер запущен на порту ${PORT}`);
});
