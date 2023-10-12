const content = document.getElementById('articlecollag');
const horizontalScroll = document.getElementById('articlecollage');

let isDragging = false;
let startX = 0;
let startScrollLeft = 0;

content.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startScrollLeft = content.scrollLeft;
  content.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - startX;
  content.scrollLeft = startScrollLeft - deltaX;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  content.style.cursor = 'grab';
});

// Ngăn chặn sự kiện mặc định khi kéo chuột
window.addEventListener('dragover', (e) => {
  e.preventDefault();
});