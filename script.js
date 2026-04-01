// ДАННЫЕ ОСТАВЛЯЕМ КАК ЕСТЬ (ПУТИ К ФОТО НЕ ТРОГАЕМ)
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

// РЕНДЕР КАТАЛОГА С НОВЫМ СТИЛЕМ
function renderCatalog() {
    const grid = document.getElementById('cars-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    carData.forEach(car => {
        grid.innerHTML += `
            <div class="car-card" onclick="openCar('${car.id}')">
                <div style="padding: 10px; border-bottom: 1px solid #1a1a1a; display: flex; justify-content: space-between; align-items: center;">
                    <span style="color:var(--neon); font-family:'Orbitron'; font-size:0.6rem; letter-spacing:1px;">ID: ${car.id.toUpperCase()}</span>
                    <span style="color:#444; font-size:0.6rem;">${car.cat}</span>
                </div>
                <img src="images/${car.imgs[0]}" alt="${car.name}">
                <div style="padding: 15px;">
                    <h3 style="margin:0; font-size: 1.4rem;">${car.name}</h3>
                    <div style="display:flex; justify-content:space-between; margin-top:15px; align-items: flex-end;">
                        <div>
                            <div style="font-size: 0.6rem; color: #555; text-transform: uppercase;">Сутки</div>
                            <div style="font-family:'Orbitron'; font-weight:900; font-size: 1.1rem; color: #fff;">${car.price}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 0.6rem; color: #555; text-transform: uppercase;">Мощность</div>
                            <div style="color:var(--neon); font-family:'Orbitron'; font-size: 0.9rem;">${car.hp}</div>
                        </div>
                    </div>
                </div>
                <div style="height: 2px; width: 100%; background: #1a1a1a; position: relative;">
                    <div style="position: absolute; left: 0; top: 0; height: 100%; width: 30%; background: var(--neon);"></div>
                </div>
            </div>
        `;
    });
}

function openCar(id) {
    localStorage.setItem('currentCarId', id);
    window.location.href = 'car.html';
}

// РАСШИРЕННЫЙ КВИЗ (3 ШАГА)
const quizData = [
    { q: "ДЛЯ КАКОЙ ЦЕЛИ НУЖЕН АВТО?", a: ["БИЗНЕС ВСТРЕЧА", "ГРОМКОЕ СОБЫТИЕ", "ЧИСТЫЙ ДРАЙВ"] },
    { q: "ЖЕЛАЕМЫЙ ТИП ПРИВОДА?", a: ["ПОЛНЫЙ (AWD)", "ЗАДНИЙ (RWD)", "НЕВАЖНО"] },
    { q: "ВАШ ОПЫТ ВОЖДЕНИЯ?", a: ["ДО 3 ЛЕТ", "ОТ 3 ДО 10 ЛЕТ", "ПРОФЕССИОНАЛ"] }
];

let step = 0;

function openQuiz() { 
    document.getElementById('quiz-modal').style.display = 'flex'; 
    step = 0; 
    showStep(); 
}

function closeQuiz() { 
    document.getElementById('quiz-modal').style.display = 'none'; 
}

function showStep() {
    const q = quizData[step];
    document.getElementById('quiz-question').innerText = q.q;
    const opt = document.getElementById('quiz-options');
    opt.innerHTML = '';
    q.a.forEach(v => { 
        opt.innerHTML += `<button class="ai-btn" style="text-align:center; font-weight:bold; letter-spacing:1px;" onclick="nextStep()">${v}</button>`; 
    });
}

function nextStep() {
    step++;
    if(step < quizData.length) {
        showStep();
    } else {
        document.getElementById('quiz-question').innerText = "АНАЛИЗ ЗАВЕРШЕН. ВАШ ВЫБОР:";
        document.getElementById('quiz-options').innerHTML = `
            <div style="text-align:center; width:100%;">
                <h2 style="color:var(--neon); font-family:'Orbitron'; font-size:2.5rem; margin-bottom:20px; text-shadow: 0 0 20px var(--neon);">LAMBORGHINI REVUELTO</h2>
                <p style="color:#888; margin-bottom:30px;">Идеальное сочетание мощности V12 и технологий будущего.</p>
                <button class="btn-neon-large" onclick="closeQuiz()">ПЕРЕЙТИ К БРОНИРОВАНИЮ</button>
            </div>
        `;
    }
}

// УЛУЧШЕННЫЙ ИИ ЧАТ
function toggleAiChat() {
    const win = document.getElementById('ai-window');
    const isVisible = win.style.display === 'flex';
    win.style.display = isVisible ? 'none' : 'flex';
}

function aiAnswer(q, a) {
    const resp = document.getElementById('ai-response');
    resp.style.display = 'block';
    resp.innerHTML = `<span style="color:#555; font-size:0.8rem;">ОБРАБОТКА ЗАПРОСА...</span>`;
    
    // Эффект небольшой задержки "типа ИИ думает"
    setTimeout(() => {
        resp.innerHTML = `<strong style="color:var(--neon); font-family:'Orbitron'; font-size:0.8rem;">[SYSTEM]: ${q.toUpperCase()}</strong><br><span style="color:#eee;">${a}</span>`;
    }, 400);
}

// Закрытие модалки по клику вне контента
window.onclick = function(event) {
    const modal = document.getElementById('quiz-modal');
    if (event.target == modal) {
        closeQuiz();
    }
}

window.onload = renderCatalog;
