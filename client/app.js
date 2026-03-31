// Инициализация плагина ScrollTrigger для GSAP (без импортов)
gsap.registerPlugin(ScrollTrigger);

// 1. Инициализация Lenis (Плавный скролл)
const lenis = new Lenis({ duration: 1.2 });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

let allCars = [];

// 2. Запрос машин (без localhost, чтобы работало на Vercel)
async function fetchCars() {
  try {
    const response = await fetch('/api/cars');
    allCars = await response.json();
    renderCars(allCars);
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
}

// 3. Вывод карточек на страницу
function renderCars(cars) {
  const grid = document.getElementById('carsGrid');
  grid.innerHTML = ''; 
  
  cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <div class="car-img">
         <img src="${car.img}" alt="${car.name}">
      </div>
      <div class="car-info">
         <span>${car.class}</span>
         <h3>${car.name}</h3>
         <button>Подробнее</button>
      </div>
    `;
    
    // Переход на страницу авто при клике
    card.addEventListener('click', () => {
      window.location.href = `/car.html?id=${car.id}`;
    });
    
    grid.appendChild(card);
  });

  // Анимация GSAP
  gsap.from('.car-card', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: { trigger: '#carsGrid', start: 'top 85%' }
  });
}

// 4. Глобальный фильтр (для опроса)
window.filterCars = function(className) {
  if (className === 'all') {
    renderCars(allCars);
  } else {
    const filtered = allCars.filter(car => car.class === className);
    renderCars(filtered);
  }
}

// 5. Логика ИИ Чат-бота
const botTrigger = document.getElementById('botTrigger');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

botTrigger.addEventListener('click', () => chatWindow.style.display = 'flex');
closeChat.addEventListener('click', () => chatWindow.style.display = 'none');

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendMessage(); });

function sendMessage() {
  const text = chatInput.value.trim();
  if(!text) return;

  createMessage(text, 'user');
  chatInput.value = '';

  setTimeout(() => {
    let reply = "Все операторы NOLLY CARS сейчас заняты. Оставьте контакты, мы свяжемся с вами!";
    
    if (text.toLowerCase().includes('business') || text.toLowerCase().includes('бизнес')) {
      reply = "В классе Business рекомендуем Mercedes E-Class или BMW 5 серии. Какое авто забронировать?";
    } else if (text.toLowerCase().includes('ultima') || text.toLowerCase().includes('ультима')) {
      reply = "Для максимальных эмоций у нас есть Rolls-Royce Spectre и Lamborghini Revuelto.";
    }
    
    createMessage(reply, 'bot');
  }, 1000);
}

function createMessage(text, type) {
  const div = document.createElement('div');
  div.style.padding = '10px';
  div.style.maxWidth = '85%';
  div.style.borderRadius = '2px';
  div.innerText = text;

  if (type === 'user') {
    div.style.background = '#c5a059';
    div.style.color = '#000';
    div.style.alignSelf = 'flex-end';
    div.style.fontWeight = '700';
  } else {
    div.style.background = 'rgba(255,255,255,0.02)';
    div.style.color = '#ccc';
    div.style.alignSelf = 'flex-start';
  }

  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

fetchCars();
