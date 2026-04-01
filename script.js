// ДАННЫЕ ОСТАВЛЯЕМ КАК ЕСТЬ
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

// --- РАСШИРЕННЫЙ КВИЗ ---
let step = 0;
let userAnswers = { category: 'BUSINESS' };

const quizData = [
    { 
        q: "КТО ВЫ СЕГОДНЯ?", 
        a: [
            { text: "ДЕЙСТВУЮЩИЙ БИЗНЕСМЕН", cat: "BUSINESS" },
            { text: "ЦЕНИТЕЛЬ КОМФОРТА", cat: "PREMIUM" },
            { text: "ОХОТНИК ЗА АДРЕНАЛИНОМ", cat: "ULTIMA" }
        ] 
    },
    { 
        q: "ЦЕЛЬ ВАШЕЙ ПОЕЗДКИ?", 
        a: [
            { text: "ВСТРЕЧА ИЗ АЭРОПОРТА", cat: "BUSINESS" },
            { text: "ЯРКОЕ СВИДАНИЕ", cat: "PREMIUM" },
            { text: "ТРЕК ИЛИ НОЧНОЙ ГОРОД", cat: "ULTIMA" }
        ] 
    },
    { 
        q: "ВАШ ПРИОРИТЕТ В АВТО?", 
        a: [
            { text: "СТРОГИЙ СТИЛЬ", cat: "BUSINESS" },
            { text: "МЯГКОСТЬ ПОДВЕСКИ", cat: "PREMIUM" },
            { text: "ЗВУК ВЫХЛОПА", cat: "ULTIMA" }
        ] 
    },
    { 
        q: "ЖЕЛАЕМЫЙ ТИП ПРИВОДА?", 
        a: [
            { text: "ПОЛНЫЙ (AWD)", cat: "BUSINESS" },
            { text: "НЕВАЖНО", cat: "PREMIUM" },
            { text: "ТОЛЬКО ЗАДНИЙ", cat: "ULTIMA" }
        ] 
    },
    { 
        q: "ВАШ ОПЫТ ВОЖДЕНИЯ?", 
        a: [
            { text: "ОТ 2 ДО 5 ЛЕТ", cat: "BUSINESS" },
            { text: "ОТ 5 ДО 10 ЛЕТ", cat: "PREMIUM" },
            { text: "БОЛЕЕ 10 ЛЕТ / ПИЛОТ", cat: "ULTIMA" }
        ] 
    },
    { 
        q: "БЮДЖЕТ НА СУТКИ?", 
        a: [
            { text: "ДО 20.000₽", cat: "BUSINESS" },
            { text: "ОТ 30.000₽ ДО 60.000₽", cat: "PREMIUM" },
            { text: "БЕЗ ОГРАНИЧЕНИЙ", cat: "ULTIMA" }
        ] 
    }
];

function openQuiz() { 
    document.getElementById('quiz-modal').style.display = 'flex'; 
    step = 0; 
    showStep(); 
}

function closeQuiz() { 
    document.getElementById('quiz-modal').style.display = 'none'; 
}

function showStep() {
    const current = quizData[step];
    document.getElementById('quiz-question').innerText = current.q;
    const opt = document.getElementById('quiz-options');
    opt.innerHTML = '';
    
    current.a.forEach(item => { 
        opt.innerHTML += `<button class="ai-btn" style="text-align:center; font-weight:bold;" onclick="handleAnswer('${item.cat}')">${item.text}</button>`; 
    });
}

function handleAnswer(selectedCat) {
    userAnswers.category = selectedCat; // Последний ответ определяет итоговую подборку
    step++;
    if(step < quizData.length) {
        showStep();
    } else {
        showResult();
    }
}

function showResult() {
    // Фильтруем авто по категории, которую выбрал пользователь в конце или чаще всего
    const recommendations = carData.filter(car => car.cat === userAnswers.category).slice(0, 3);
    
    document.getElementById('quiz-question').innerText = "ПОДБОРОЧКА ДЛЯ ВАС:";
    let resultHTML = `<div style="display:grid; grid-template-columns: 1fr; gap:15px; margin-bottom:20px;">`;
    
    recommendations.forEach(car => {
        resultHTML += `
            <div onclick="openCar('${car.id}')" style="background:#111; padding:15px; border:1px solid var(--neon); cursor:pointer; display:flex; align-items:center; gap:15px; text-align:left;">
                <img src="images/${car.imgs[0]}" style="width:80px; height:50px; object-fit:cover;">
                <div>
                    <div style="font-family:'Orbitron'; font-size:0.9rem;">${car.name}</div>
                    <div style="color:var(--neon); font-size:0.8rem;">${car.price}</div>
                </div>
            </div>
        `;
    });
    
    resultHTML += `</div><button class="btn-neon-large" onclick="closeQuiz()">В КАТАЛОГ</button>`;
    document.getElementById('quiz-options').innerHTML = resultHTML;
}

// --- ИИ ЧАТ ---
function toggleAiChat() {
    const win = document.getElementById('ai-window');
    win.style.display = (win.style.display === 'flex') ? 'none' : 'flex';
}

function aiAnswer(q, a) {
    const resp = document.getElementById('ai-response');
    resp.style.display = 'block';
    resp.innerHTML = `<span style="color:#555; font-size:0.8rem;">ОБРАБОТКА...</span>`;
    
    setTimeout(() => {
        resp.innerHTML = `<strong style="color:var(--neon); font-family:'Orbitron'; font-size:0.8rem;">[SYSTEM]: ${q.toUpperCase()}</strong><br>${a}`;
    }, 400);
}

window.onclick = function(event) {
    const modal = document.getElementById('quiz-modal');
    if (event.target == modal) closeQuiz();
}

window.onload = renderCatalog;

