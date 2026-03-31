import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 1. Инициализация Lenis
const lenis = new Lenis({ duration: 1.2 });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

// 2. Запрос машин
async function fetchCars() {
  const response = await fetch('http://localhost:5000/api/cars');
  const data = await response.json();
  renderCars(data);
}

// 3. Вывод карточек и переход на страницу авто
function renderCars(cars) {
  const grid = document.querySelector('.cars-grid');
  grid.innerHTML = ''; // очистка
  
  cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <div class="car-img">
         <img src="/images/cars/${car.images[0]}" alt="${car.name}">
      </div>
      <div class="car-info">
         <span>${car.class.toUpperCase()}</span>
         <h3>${car.name}</h3>
      </div>
    `;
    
    // ПЕРЕХОД: При нажатии на карточку переходим на страницу с параметром ?id
    card.addEventListener('click', () => {
      window.location.href = `/car.html?id=${car.id}`;
    });
    
    grid.appendChild(card);
  });

  // Анимация выезда GSAP
  gsap.from('.car-card', {
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: { trigger: '.cars-grid', start: 'top 80%' }
  });
}

// 4. Логика ИИ Консультанта
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

async function sendMessage() {
  const text = chatInput.value.trim();
  if(!text) return;

  // Отрисовка сообщения юзера
  createMessage(text, 'user-msg');
  chatInput.value = '';

  // Эмуляция ответа "ИИ" (в будущем сюда можно прикрутить реальный запрос к ChatGPT)
  setTimeout(() => {
    let reply = "К сожалению, сейчас все наши операторы и ИИ заняты подготовкой авто. Оставьте контакты, мы перезвоним!";
    if (text.toLowerCase().includes('rolls') || text.toLowerCase().includes('спектр')) {
      reply = "Rolls-Royce Spectre — венец нашей коллекции Ultima. Он доступен для бронирования. Желаете оформить заявку?";
    }
    createMessage(reply, 'bot-msg');
  }, 1000);
}

function createMessage(text, className) {
  const div = document.createElement('div');
  div.className = `msg ${className}`;
  div.innerText = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight; // автоскролл вниз
}

fetchCars();
