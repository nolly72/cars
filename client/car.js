// Инициализация Lenis (для плавного скролла)
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({ duration: 1.2 });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}

const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get('id');
const container = document.getElementById('carDetailContainer');

async function loadCarDetails() {
  if (!carId) {
    container.innerHTML = `<p style="color: #fff;">Критическая ошибка: Машина не выбрана.</p>`;
    return;
  }

  try {
    const response = await fetch(`/api/cars/${carId}`);
    if (!response.ok) throw new Error('Автомобиль не найден');
    
    const car = await response.json();
    renderCarPage(car);
  } catch (error) {
    console.error(error);
    container.innerHTML = `<p style="color: #fff;">Ошибка загрузки. Пожалуйста, вернитесь в каталог.</p>`;
  }
}

function renderCarPage(car) {
  container.innerHTML = `
    <!-- Левая колонка: ГАЛЕРЕЯ -->
    <div class="gallery-column">
      <img src="${car.images[0]}" class="main-image" id="mainImg" alt="${car.name}">
      <div class="thumbnails">
        <img src="${car.images[0]}" class="thumb active" onclick="changeImage(this, '${car.images[0]}')">
        <img src="${car.images[1]}" class="thumb" onclick="changeImage(this, '${car.images[1]}')">
        <img src="${car.images[2]}" class="thumb" onclick="changeImage(this, '${car.images[2]}')">
      </div>
    </div>

    <!-- Правая колонка: ИНФОРМАЦИЯ -->
    <div class="info-column">
      <div class="car-meta">
        <span>${car.class}</span>
        <h1>${car.name}</h1>
      </div>
      
      <p class="car-desc">${car.desc}</p>

      <table class="specs-table">
        <tr>
          <td class="label">Двигатель</td>
          <td class="value">${car.specs.engine}</td>
        </tr>
        <tr>
          <td class="label">Мощность</td>
          <td class="value">${car.specs.power}</td>
        </tr>
        <tr>
          <td class="label">Разгон (0-100)</td>
          <td class="value">${car.specs.accel}</td>
        </tr>
        <tr>
          <td class="label" style="color: var(--accent-gold); font-weight: 700;">Стоимость</td>
          <td class="value" style="color: var(--accent-gold); font-weight: 900;">${car.price}</td>
        </tr>
      </table>

      <button class="rent-btn">Забронировать авто</button>
    </div>
  `;

  window.changeImage = function(element, src) {
    const mainImg = document.getElementById('mainImg');
    mainImg.style.opacity = 0;
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = 1;
    }, 200);

    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
  };
}

loadCarDetails();
