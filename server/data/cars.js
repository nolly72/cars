const cars = [
  // === BUSINESS ===
  {
    id: "mb-e-class",
    class: "business",
    name: "Mercedes-Benz E-Class",
    description: "Эталон бизнес-класса, сочетающий в себе цифровой комфорт и классический стиль.",
    specs: { engine: "2.0L Turbo", power: "258 л.с.", speed: "6.2 сек до 100" },
    images: ["e1.jpg", "e2.jpg", "e3.jpg"]
  },
  {
    id: "bmw-5",
    class: "business",
    name: "BMW 5-Series",
    description: "Динамичный седан для тех, кто привык контролировать не только бизнес, но и дорогу.",
    specs: { engine: "3.0L TwinPower", power: "286 л.с.", speed: "5.7 сек до 100" },
    images: ["b1.jpg", "b2.jpg", "b3.jpg"]
  },
  {
    id: "audi-a6",
    class: "business",
    name: "Audi A6 Avant",
    description: "Идеальный баланс между практичностью премиального уровня и строгим дизайном.",
    specs: { engine: "2.0L TDI", power: "204 л.с.", speed: "Пневмоподвеска" },
    images: ["a1.jpg", "a2.jpg", "a3.jpg"]
  },

  // === PREMIUM ===
  {
    id: "maybach",
    class: "premium",
    name: "Mercedes-Maybach S-Class",
    description: "Автомобиль, где главным местом является заднее правое сиденье. Премиальный отдых.",
    specs: { engine: "4.0L V8", power: "503 л.с.", speed: "Полный привод" },
    images: ["m1.jpg", "m2.jpg", "m3.jpg"]
  },
  {
    id: "bentley",
    class: "premium",
    name: "Bentley Continental GT",
    description: "Двухдверный шедевр британского автопрома для ценителей ручной работы.",
    specs: { engine: "6.0L W12", power: "635 л.с.", speed: "3.7 сек до 100" },
    images: ["bt1.jpg", "bt2.jpg", "bt3.jpg"]
  },
  {
    id: "panamera",
    class: "premium",
    name: "Porsche Panamera Hybrid",
    description: "Спорткар в теле роскошного лимузина. Грация и безумная динамика.",
    specs: { engine: "4.0L V8 + Electro", power: "680 л.с.", speed: "Гибрид" },
    images: ["p1.jpg", "p2.jpg", "p3.jpg"]
  },

  // === ULTIMA ===
  {
    id: "spectre",
    class: "ultima",
    name: "Rolls-Royce Spectre",
    description: "Первый полностью электрический ультра-люкс купе. Абсолютная тишина и величие.",
    specs: { engine: "Dual Motor Electric", power: "585 л.с.", speed: "Запас 520 км" },
    images: ["s1.jpg", "s2.jpg", "s3.jpg"]
  },
  {
    id: "revuelto",
    class: "ultima",
    name: "Lamborghini Revuelto",
    description: "Гибридный монстр с двигателем V12. Оставляет за собой только восхищение.",
    specs: { engine: "6.5L V12 Hybrid", power: "1015 л.с.", speed: "2.5 сек до 100" },
    images: ["r1.jpg", "r2.jpg", "r3.jpg"]
  },
  {
    id: "purosangue",
    class: "ultima",
    name: "Ferrari Purosangue",
    description: "Первое четырехдверное творение из Маранелло. Неповторимый звук атмосферного V12.",
    specs: { engine: "6.5L V12", power: "725 л.с.", speed: "310 км/ч макс." },
    images: ["f1.jpg", "f2.jpg", "f3.jpg"]
  }
];

module.exports = cars;
