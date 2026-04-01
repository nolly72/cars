const carData = [
    { id: 'bmw-5', cat: 'BUSINESS', name: 'BMW 5-Series', price: '14,500₽', imgs: ['bmw-51.jpg', 'bmw-52.jpg', 'bmw-53.jpg'], hp: '252 л.с.', speed: '250 км/ч', desc: 'Немецкий драйв и премиальный комфорт.' },
    { id: 'audi-a6', cat: 'BUSINESS', name: 'Audi A6 Avant', price: '13,000₽', imgs: ['audi-a61.jpg', 'audi-a62.jpg', 'audi-a63.jpg'], hp: '245 л.с.', speed: '240 км/ч', desc: 'Универсальность и мощь полного привода Quattro.' },
    { id: 'maybach', cat: 'PREMIUM', name: 'Mercedes-Maybach S', price: '45,000₽', imgs: ['maybach1.jpg', 'maybach2.jpg', 'maybach3.jpg'], hp: '503 л.с.', speed: '250 км/ч', desc: 'Ультимативный уровень роскоши.' },
    { id: 'bentley', cat: 'PREMIUM', name: 'Bentley Continental GT', price: '60,000₽', imgs: ['bentley1.jpg', 'bentley2.jpg', 'bentley3.jpg'], hp: '635 л.с.', speed: '333 км/ч', desc: 'Аристократизм и сокрушительная мощь.' },
    { id: 'panamera', cat: 'PREMIUM', name: 'Porsche Panamera', price: '35,000₽', imgs: ['panamera1.jpg', 'panamera2.jpg', 'panamera3.jpg'], hp: '480 л.с.', speed: '315 км/ч', desc: 'Спорткар для ежедневных поездок.' },
    { id: 'spectre', cat: 'ULTIMA', name: 'Rolls-Royce Spectre', price: '120,000₽', imgs: ['spectre1.jpg', 'spectre2.jpg', 'spectre3.jpg'], hp: '585 л.с.', speed: '250 км/ч', desc: 'Будущее электрической роскоши.' },
    { id: 'revuelto', cat: 'ULTIMA', name: 'Lamborghini Revuelto', price: '150,000₽', imgs: ['revuelto1.jpg', 'revuelto2.jpg', 'revuelto3.jpg'], hp: '1015 л.с.', speed: '350+ км/ч', desc: 'Гибридная ярость двигателя V12.' },
    { id: 'purosangue', cat: 'ULTIMA', name: 'Ferrari Purosangue', price: '140,000₽', imgs: ['purosangue1.jpg', 'purosangue2.jpg', 'purosangue3.jpg'], hp: '725 л.с.', speed: '310 км/ч', desc: 'Первый SUV от Ferrari.' }
];

function renderCatalog() {
    const grid = document.getElementById('cars-grid');
    if (!grid) return;
    grid.innerHTML = '';
    carData.forEach(car => {
        grid.innerHTML += `
            <div class="car-card" onclick="openCar('${car.id}')">
                <span style="color:var(--neon); font-size:0.7rem;">[ ${car.cat} ]</span>
                <img src="images/${car.imgs[0]}" alt="${car.name}">
                <h3>${car.name}</h3>
                <div style="display:flex; justify-content:space-between; margin-top:10px;">
                    <span style="font-weight:900;">${car.price} / СУТКИ</span>
                    <span style="color:var(--neon)">${car.hp}</span>
                </div>
            </div>
        `;
    });
}

function openCar(id) {
    localStorage.setItem('currentCarId', id);
    window.location.href = 'car.html';
}

// ЛОГИКА ТЕСТА
const quizData = [
    { q: "Ваша цель?", a: ["Бизнес", "Свидание", "Скорость"] },
    { q: "Ваш бюджет?", a: ["До 30к", "До 100к", "Без границ"] }
];
let step = 0;
function openQuiz() { document.getElementById('quiz-modal').style.display = 'flex'; step = 0; showStep(); }
function closeQuiz() { document.getElementById('quiz-modal').style.display = 'none'; }
function showStep() {
    const q = quizData[step];
    document.getElementById('quiz-question').innerText = q.q;
    const opt = document.getElementById('quiz-options');
    opt.innerHTML = '';
    q.a.forEach(v => { opt.innerHTML += `<button class="btn-neon" style="margin-bottom:10px;" onclick="nextStep()">${v}</button>`; });
}
function nextStep() {
    step++;
    if(step < quizData.length) showStep();
    else {
        document.getElementById('quiz-question').innerText = "ВАШ ВЫБОР:";
        document.getElementById('quiz-options').innerHTML = `<h2 style="color:var(--neon); margin-bottom:20px;">Lamborghini Revuelto</h2><button class="btn-neon" onclick="closeQuiz()">В КАТАЛОГ</button>`;
    }
}

// ИИ ЧАТ
function toggleAiChat() {
    const win = document.getElementById('ai-window');
    win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
}
function aiAnswer(q, a) {
    const resp = document.getElementById('ai-response');
    resp.style.display = 'block';
    resp.innerHTML = `<strong>${q}</strong><br>${a}`;
}

window.onload = renderCatalog;
