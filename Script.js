
function DropDown() {
    const menu = document.getElementById("Menu");
    menu.classList.toggle("invisible");
    menu.classList.toggle("visible");
  }



// s----4-----pricing 
let rangeInput = document.querySelector('input[type="range"]');
let value1 = document.getElementById('1');
let value2 = document.getElementById('2');
let msg = document.getElementById('msg');


rangeInput.addEventListener('input', function() {
  let newValue = 17.5 - (this.value / 100 * 10);
  let newUsers = this.value * 50 + 0;
  
  value1.textContent = newValue.toFixed(2);
  value2.value = newUsers;
  
  if (this.value == this.max) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
});



// -------------footer------------------
const languageSelector = document.getElementById('language-selector');
const languageMenu = document.getElementById('language-menu');

function toggleLanguageMenu() {
  languageMenu.classList.toggle('hidden');
  languageMenu.classList.toggle('visible');
}

function hideLanguageMenu(e) {
  if (!languageSelector.contains(e.target) && !languageMenu.contains(e.target)) {
    languageMenu.classList.remove('visible');
    languageMenu.classList.add('hidden');
  }
}

languageSelector.addEventListener('click', toggleLanguageMenu);
document.addEventListener('click', hideLanguageMenu);





//---------------------------------------------------
const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
