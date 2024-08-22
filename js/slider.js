let index = 0;

function showSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (n >= totalSlides) { index = 0; }
    if (n < 0) { index = totalSlides - 1; }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    index++;
    showSlide(index);
});

document.querySelector('.prev').addEventListener('click', () => {
    index--;
    showSlide(index);
});

// Optional: Auto-slide functionality
setInterval(() => {
    index++;
    showSlide(index);
}, 10000);





