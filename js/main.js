'use strict'

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() => {
    const n = Math.random();
    if (n < 0.05) {
      circle.classList.toggle('circle');
      btn.textContent = 'SSR'; // 5%
      alert('おめでとうございます');
      btn.style.color = 'yellow';
    } else if (n < 0.2) {
      btn.textContent = 'SR'; // 15%
      btn.style.color = 'white';
    } else {
      btn.textContent = 'R'; // 80%
      btn.style.color = 'white';
    }
  });
}