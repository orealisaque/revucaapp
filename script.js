// script.js

// Exemplo de função para capturar a localização atual
document.getElementById("current-location-btn").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log("Latitude: ", lat, "Longitude: ", long);
            // Aqui poderemos integrar com a API de localização para converter em cidade
        });
    } else {
        alert("Geolocalização não suportada pelo navegador.");
    }
});

// Controle de slides do carrossel
function showSlide(slideId) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach(slide => slide.classList.remove('active'));
    
    const activeSlide = document.getElementById(slideId);
    activeSlide.classList.add('active');
}

// Inicializa o carrossel com o primeiro slide ativo
document.addEventListener("DOMContentLoaded", () => {
    showSlide('top-10-slide');
});

// Animação de fade-in
function fadeIn(element) {
    element.classList.add('fade-in');
}


const slides = document.querySelectorAll('.carousel-slide');
const container = document.querySelector('.carousel-container');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    container.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // volta ao primeiro ao final
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // volta ao último ao pressionar anterior no início
    updateCarousel();
});