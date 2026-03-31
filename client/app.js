// Инициализация плагина ScrollTrigger для GSAP
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 1. Инициализация Lenis (Плавный скролл)
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({ duration: 1.2 });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}

// 2. Запрос машин и передача их в глобальную функцию HTML
async function fetchCars() {
  try {
    const response = await fetch('/api/cars');
    allCars = await response.json(); // Наполняем глобальный массив в HTML
    renderCars(allCars); // Вызываем функцию из HTML
  } catch (error) {
    console.error("Ошибка загрузки авто:", error);
  }
}

// 3. Логика ИИ Чат-бота
const botTrigger = document.getElementById('botTrigger');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

if (botTrigger) {
  botTrigger.addEventListener('click', () => chatWindow.style.display = 'flex');
}
if (closeChat) {
  closeChat.addEventListener('click', () => chatWindow.style.display = 'none');
}
if (sendBtn) {
  sendBtn.addEventListener('click', sendMessage);
}
if (chatInput) {
  chatInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendMessage(); });
}

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

// Запускаем загрузку
fetchCars();
