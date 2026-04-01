const carData = [
    { id: 'bmw-5', cat: 'BUSINESS', name: 'BMW 5-Series', price: '14,500₽', imgs: ['bmw-51.jpg', 'bmw-52.jpg', 'bmw-53.jpg'], hp: '252 л.с.', speed: '250 км/ч', desc: 'Абсолютный драйв и немецкая эргономика. Идеальный выбор для тех, кто ценит контроль.' },
    { id: 'audi-a6', cat: 'BUSINESS', name: 'Audi A6 Avant', price: '13,000₽', imgs: ['audi-a61.jpg', 'audi-a62.jpg', 'audi-a63.jpg'], hp: '245 л.с.', speed: '240 км/ч', desc: 'Совершенство в деталях. Полный привод Quattro и премиальный комфорт в каждой поездке.' },
    { id: 'maybach', cat: 'PREMIUM', name: 'Mercedes-Maybach S', price: '45,000₽', imgs: ['maybach1.jpg', 'maybach2.jpg', 'maybach3.jpg'], hp: '503 л.с.', speed: '250 км/ч', desc: 'Ультимативный уровень роскоши. Ваш личный бизнес-джет на дорогах Москвы.' },
    { id: 'bentley', cat: 'PREMIUM', name: 'Bentley Continental GT', price: '60,000₽', imgs: ['bentley1.jpg', 'bentley2.jpg', 'bentley3.jpg'], hp: '635 л.с.', speed: '333 км/ч', desc: 'Британский аристократизм в сочетании с сокрушительной мощью двигателя W12.' },
    { id: 'panamera', cat: 'PREMIUM', name: 'Porsche Panamera', price: '35,000₽', imgs: ['panamera1.jpg', 'panamera2.jpg', 'panamera3.jpg'], hp: '480 л.с.', speed: '315 км/ч', desc: 'Спорткар, который не требует компромиссов. Комфорт для четверых и дух Porsche.' },
    { id: 'spectre', cat: 'ULTIMA', name: 'Rolls-Royce Spectre', price: '120,000₽', imgs: ['spectre1.jpg', 'spectre2.jpg', 'spectre3.jpg'], hp: '585 л.с.', speed: '250 км/ч', desc: 'Бесшумное величие. Первый полностью электрический шедевр от Rolls-Royce.' },
    { id: 'revuelto', cat: 'ULTIMA', name: 'Lamborghini Revuelto', price: '150,000₽', imgs: ['revuelto1.jpg', 'revuelto2.jpg', 'revuelto3.jpg'], hp: '1015 л.с.', speed: '350+ км/ч', desc: 'Будущее суперкаров уже здесь. Гибридная ярость и невероятная аэродинамика.' },
    { id: 'purosangue', cat: 'ULTIMA', name: 'Ferrari Purosangue', price: '140,000₽', imgs: ['purosangue1.jpg', 'purosangue2.jpg', 'purosangue3.jpg'], hp: '725 л.с.', speed: '310 км/ч', desc: 'Единственный в своем роде. Настоящий Ferrari для тех, кто привык побеждать.' }
];

function renderCatalog() {
    const grid = document.getElementById('cars-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    carData.forEach(car => {
        grid.innerHTML += `
            <div class="car-card" onclick="openCar('${car.id}')">
                <span class="cat-label">[ ${car.cat} ]</span>
                <img src="images/${car.imgs[0]}" alt="${car.name}">
                <h3>${car.name}</h3>
                <div class="card-meta">
                    <span class="price-tag">${car.price} / СУТКИ</span>
                    <span class="hp-tag">${car.hp}</span>
                </div>
            </div>
        `;
    });
}

function openCar(id) {
    localStorage.setItem('currentCarId', id);
    window.location.href = 'car.html';
}
