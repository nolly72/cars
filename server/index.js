const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// База данных машин вынесена прямо сюда, чтобы избежать ошибок путей на Vercel
const cars = [
  { id: "mb-e-class", class: "business", name: "Mercedes-Benz E-Class", desc: "Эталон бизнес-класса, сочетающий в себе цифровой комфорт.", img: "https://unsplash.com" },
  { id: "bmw-5", class: "business", name: "BMW 5-Series", desc: "Динамичный седан для тех, кто привык контролировать дорогу.", img: "https://unsplash.com" },
  { id: "audi-a6", class: "business", name: "Audi A6 Avant", desc: "Идеальный баланс между практичностью и строгим дизайном.", img: "https://unsplash.com" },
  { id: "maybach", class: "premium", name: "Mercedes-Maybach S", desc: "Автомобиль, где главным местом является заднее правое сиденье.", img: "https://unsplash.com" },
  { id: "bentley", class: "premium", name: "Bentley Continental GT", desc: "Двухдверный шедевр британского автопрома.", img: "https://unsplash.com" },
  { id: "panamera", class: "premium", name: "Porsche Panamera Hybrid", desc: "Спорткар в теле роскошного лимузина. Грация и динамика.", img: "https://unsplash.com" },
  { id: "spectre", class: "ultima", name: "Rolls-Royce Spectre", desc: "Первый полностью электрический ультра-люкс купе.", img: "https://unsplash.com" },
  { id: "revuelto", class: "ultima", name: "Lamborghini Revuelto", desc: "Гибридный монстр с двигателем V12. За гранью возможного.", img: "https://unsplash.com" },
  { id: "purosangue", class: "ultima", name: "Ferrari Purosangue", desc: "Первое четырехдверное творение из Маранелло.", img: "https://unsplash.com" }
];

// Роут для получения всех машин
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

// Роут для получения одной машины
app.get('/api/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === req.params.id);
  if (!car) return res.status(404).json({ message: "Машина не найдена" });
  res.json(car);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

module.exports = app;
