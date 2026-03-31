const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const cars = [
  // === BUSINESS CLASS ===
  { 
    id: "mb-e-class", 
    class: "business", 
    name: "Mercedes-Benz E-Class", 
    desc: "Эталон бизнес-класса, сочетающий в себе цифровой комфорт, инновационные системы безопасности и классический немецкий стиль для деловых поездок.", 
    specs: { engine: "2.0L Turbo", power: "258 л.с.", accel: "6.2 сек до 100 км/ч" },
    price: "15 000 руб. / сутки",
    img: "/images/cars/mb-e1.jpg",
    images: ["/images/cars/mb-e1.jpg", "/images/cars/mb-e2.jpg", "/images/cars/mb-e3.jpg"]
  },
  { 
    id: "bmw-5", 
    class: "business", 
    name: "BMW 5-Series", 
    desc: "Динамичный бизнес-седан для тех, кто привык контролировать не только свои дела, но и дорогу. Острый руль и бескомпромиссный комфорт.", 
    specs: { engine: "3.0L TwinPower", power: "286 л.с.", accel: "5.7 сек до 100 км/ч" },
    price: "16 000 руб. / сутки",
    img: "/images/cars/bmw-51.jpg",
    images: ["/images/cars/bmw-51.jpg", "/images/cars/bmw-52.jpg", "/images/cars/bmw-53.jpg"]
  },
  { 
    id: "audi-a6", 
    class: "business", 
    name: "Audi A6 Avant", 
    desc: "Идеальный баланс между потрясающей практичностью кузова универсал и строгим, выверенным премиальным дизайном с легендарным полным приводом Quattro.", 
    specs: { engine: "2.0L TDI", power: "204 л.с.", accel: "7.4 сек до 100 км/ч" },
    price: "14 000 руб. / сутки",
    img: "/images/cars/audi-a61.jpg",
    images: ["/images/cars/audi-a61.jpg", "/images/cars/audi-a62.jpg", "/images/cars/audi-a63.jpg"]
  },

  // === PREMIUM CLASS ===
  { 
    id: "maybach", 
    class: "premium", 
    name: "Mercedes-Maybach S-Class", 
    desc: "Автомобиль, где главным местом является заднее правое сиденье. Ультимативный уровень роскоши, тишины и плавной поступи для высших лиц.", 
    specs: { engine: "4.0L V8 Biturbo", power: "503 л.с.", accel: "4.8 сек до 100 км/ч" },
    price: "45 000 руб. / сутки",
    img: "/images/cars/maybach1.jpg",
    images: ["/images/cars/maybach1.jpg", "/images/cars/maybach2.jpg", "/images/cars/maybach3.jpg"]
  },
  { 
    id: "bentley", 
    class: "premium", 
    name: "Bentley Continental GT", 
    desc: "Двухдверный шедевр британского автопрома. Сочетание благородных традиций ручной отделки салона и сокрушительной динамики спорткара.", 
    specs: { engine: "6.0L W12", power: "635 л.с.", accel: "3.7 сек до 100 км/ч" },
    price: "55 000 руб. / сутки",
    img: "/images/cars/bentley1.jpg",
    images: ["/images/cars/bentley1.jpg", "/images/cars/bentley2.jpg", "/images/cars/bentley3.jpg"]
  },
  { 
    id: "panamera", 
    class: "premium", 
    name: "Porsche Panamera", 
    desc: "Настоящий спорткар в теле роскошного четырехдверного лимузина. Грация, эталонная управляемость и высокая повседневная практичность.", 
    specs: { engine: "4.0L V8 Twin-Turbo", power: "480 л.с.", accel: "3.9 сек до 100 км/ч" },
    price: "35 000 руб. / сутки",
    img: "/images/cars/panamera1.jpg",
    images: ["/images/cars/panamera1.jpg", "/images/cars/panamera2.jpg", "/images/cars/panamera3.jpg"]
  },

  // === ULTIMA CLASS ===
  { 
    id: "spectre", 
    class: "ultima", 
    name: "Rolls-Royce Spectre", 
    desc: "Первый в истории полностью электрический ультра-люкс купе от Rolls-Royce. Абсолютная, космическая тишина в салоне и парение над дорогой.", 
    specs: { engine: "Dual Electric Motor", power: "585 л.с.", accel: "4.5 сек до 100 км/ч" },
    price: "120 000 руб. / сутки",
    img: "/images/cars/spectre1.jpg", 
    images: ["/images/cars/spectre1.jpg", "/images/cars/spectre2.jpg", "/images/cars/spectre3.jpg"]
  },
  { 
    id: "revuelto", 
    class: "ultima", 
    name: "Lamborghini Revuelto", 
    desc: "Гибридный монстр нового поколения с каноничным двигателем V12. Футуристичный дизайн и динамика, которая находится за гранью привычного.", 
    specs: { engine: "6.5L V12 + 3 Электромотора", power: "1015 л.с.", accel: "2.5 сек до 100 км/ч" },
    price: "150 000 руб. / сутки",
    img: "/images/cars/revuelto1.jpg",
    images: ["/images/cars/revuelto1.jpg", "/images/cars/revuelto2.jpg", "/images/cars/revuelto3.jpg"]
  },
  { 
    id: "purosangue", 
    class: "ultima", 
    name: "Ferrari Purosangue", 
    desc: "Первое в истории четырехдверное творение из Маранелло. Никаких компромиссов: под капотом бьется чистокровный атмосферный V12.", 
    specs: { engine: "6.5L V12", power: "725 л.с.", accel: "3.3 сек до 100 км/ч" },
    price: "130 000 руб. / сутки",
    img: "/images/cars/purosangue1.jpg",
    images: ["/images/cars/purosangue1.jpg", "/images/cars/purosangue2.jpg", "/images/cars/purosangue3.jpg"]
  }
];

app.get('/api/cars', (req, res) => {
  res.json(cars);
});

app.get('/api/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === req.params.id);
  if (!car) return res.status(404).json({ message: "Машина не найдена" });
  res.json(car);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

module.exports = app;
