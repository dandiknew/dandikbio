const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 120; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 1.2 + 0.3;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.globalAlpha = Math.random() * 0.7 + 0.3;
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}
setInterval(drawStars, 1200);
drawStars();