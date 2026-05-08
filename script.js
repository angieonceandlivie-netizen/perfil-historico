function crearParticula() {
  const p = document.createElement('div');
  p.classList.add('particula');

  const size = Math.random() * 6 + 2;
  p.style.width  = size + 'px';
  p.style.height = size + 'px';
  p.style.left   = Math.random() * 100 + 'vw';
  p.style.bottom = '-10px';

  const colores = [
    'rgba(143, 126, 30, 0.8)',
    'rgba(14, 42, 55, 0.8)',
    'rgba(255,255,255,0.6)',
    'rgba(58, 41, 82, 0.7)',
  ];
  const color = colores[Math.floor(Math.random() * colores.length)];
  p.style.background = color;

  const duracion = Math.random() * 6 + 5;
  const delay    = Math.random() * 3;
  p.style.animationDuration = duracion + 's';
  p.style.animationDelay   = delay + 's';
  p.style.boxShadow = `0 0 ${size * 2}px ${color}`;

  document.body.appendChild(p);
  setTimeout(() => p.remove(), (duracion + delay) * 1000);
}

setInterval(crearParticula, 300);
for (let i = 0; i < 20; i++) {
  setTimeout(crearParticula, i * 150);
}