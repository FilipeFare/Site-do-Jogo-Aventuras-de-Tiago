let slideIndex = 0;

function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}

showSlides(slideIndex);