const express = require('express');
const cors = require('cors');
const cars = require('./data/cars');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API роут для получения всех машин
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

// API роут для получения одной машины по ID (для детальной страницы)
app.get('/api/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === req.params.id);
  if (!car) return res.status(404).json({ message: "Машина не найдена" });
  res.json(car);
});

app.listen(PORT, () => {
  console.log(`Сервер бэкенда запущен на http://localhost:${PORT}`);
});
