const carData = [
    { id: 'mb-e', cat: 'BUSINESS', name: 'Mercedes-Benz E-Class', price: '15,000₽', imgs: ['mb-e1.jpg', 'mb-e2.jpg', 'mb-e3.jpg'], hp: '249 л.с.', speed: '250 км/ч', desc: 'Безупречный баланс комфорта и динамики для города.' },
    { id: 'bmw-5', cat: 'BUSINESS', name: 'BMW 5-Series', price: '14,500₽', imgs: ['bmw-51.jpg', 'bmw-52.jpg', 'bmw-53.jpg'], hp: '252 л.с.', speed: '250 км/ч', desc: 'Автомобиль для тех, кто любит управлять процессом лично.' },
    { id: 'audi-a6', cat: 'BUSINESS', name: 'Audi A6 Avant', price: '13,000₽', imgs: ['audi-a61.jpg', 'audi-a62.jpg', 'audi-a63.jpg'], hp: '245 л.с.', speed: '240 км/ч', desc: 'Практичность в премиальном исполнении с полным приводом.' },
    { id: 'maybach', cat: 'PREMIUM', name: 'Mercedes-Maybach S', price: '45,000₽', imgs: ['maybach1.jpg', 'maybach2.jpg', 'maybach3.jpg'], hp: '503 л.с.', speed: '250 км/ч', desc: 'Роскошь, возведенная в абсолют. Для самых важных моментов.' },
    { id: 'bentley', cat: 'PREMIUM', name: 'Bentley Continental GT', price: '60,000₽', imgs: ['bentley1.jpg', 'bentley2.jpg', 'bentley3.jpg'], hp: '635 л.с.', speed: '333 км/ч', desc: 'Мощь двенадцати цилиндров в кузове элегантного купе.' },
    { id: 'panamera', cat: 'PREMIUM', name: 'Porsche Panamera', price: '35,000₽', imgs: ['panamera1.jpg', 'panamera2.jpg', 'panamera3.jpg'], hp: '480 л.с.', speed: '315 км/ч', desc: 'Спортивный седан, не знающий компромиссов.' },
    { id: 'spectre', cat: 'ULTIMA', name: 'Rolls-Royce Spectre', price: '120,000₽', imgs: ['spectre1.jpg', 'spectre2.jpg', 'spectre3.jpg'], hp: '585 л.с.', speed: '250 км/ч', desc: 'Абсолютная тишина и электрическая мощь Rolls-Royce.' },
    { id: 'revuelto', cat: 'ULTIMA', name: 'Lamborghini Revuelto', price: '150,000₽', imgs: ['revuelto1.jpg', 'revuelto2.jpg', 'revuelto3.jpg'], hp: '1015 л.с.', speed: '350+ км/ч', desc: 'Гибридный монстр с двигателем V12 и футуристичным дизайном.' },
    { id: 'purosangue', cat: 'ULTIMA', name: 'Ferrari Purosangue', price: '140,000₽', imgs: ['purosangue1.jpg', 'purosangue2.jpg', 'purosangue3.jpg'], hp: '725 л.с.', speed: '310 км/ч', desc: 'Первый четырехдверный Ferrari в истории. Чистая кровь.' }
];

function renderCatalog() {
    const grid = document.getElementById('cars-grid');
    if (!grid) return;
    grid.innerHTML = '';
    carData.forEach(car => {
        grid.innerHTML += `
            <div class="car-card" onclick="openCar('${car.id}')">
                <p style="color: var(--neon); font-weight: 900; font-size: 0.7rem;">[ ${car.cat} ]</p>
                <img src="images/${car.imgs[0]}" alt="${car.name}">
                <h3>${car.name}</h3>
                <div class="card-meta">
                    <span>${car.price} / СУТКИ</span>
                    <span style="color: var(--neon)">${car.hp}</span>
                </div>
            </div>
        `;
    });
}

function openCar(id) {
    localStorage.setItem('currentCarId', id);
    window.location.href = 'car.html';
}
