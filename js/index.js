const portfolioContent = document.querySelector('.portfolio-content');

let isDragging = false;
let startX, scrollLeft;

portfolioContent.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - portfolioContent.offsetLeft;
    scrollLeft = portfolioContent.scrollLeft;
    portfolioContent.style.cursor = 'grabbing'; // تغییر شکل موس به حالت درگ
});

portfolioContent.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - portfolioContent.offsetLeft;
    const walk = (x - startX) * 2; // سرعت درگ کردن (مقدار ۲ را می‌توانید تغییر دهید)
    portfolioContent.scrollLeft = scrollLeft - walk;
});

portfolioContent.addEventListener('mouseup', () => {
    isDragging = false;
    portfolioContent.style.cursor = 'pointer'; // بازگشت به حالت عادی موس
});

portfolioContent.addEventListener('mouseleave', () => {
    isDragging = false;
});