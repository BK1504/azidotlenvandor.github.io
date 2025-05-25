let currentSlide = 0;  // Kezdetben a borítón vagyunk

// Diák közötti navigáció
function nextSlide(slideNumber) {
    // Elrejtjük az aktuális diát
    if (currentSlide > 0) { // Ellenőrzés, hogy ne legyen hiba az első diánál
        document.getElementById('slide-' + currentSlide).classList.add('hidden');
    }
    // Frissítjük a jelenlegi diát
    currentSlide = slideNumber;
    // Megjelenítjük az új diát
    document.getElementById('slide-' + currentSlide).classList.remove('hidden');
}

// Vissza gomb funkció
function prevSlide(slideNumber) {
    // Elrejtjük az aktuális diát
    document.getElementById('slide-' + currentSlide).classList.add('hidden');
    // Frissítjük a jelenlegi diát
    currentSlide = slideNumber;
    // Megjelenítjük a visszaváltott diát
    document.getElementById('slide-' + currentSlide).classList.remove('hidden');
}

// Kezdőlapra ugrás (újraindítás)
function goToTop() {
    document.querySelectorAll('.slide').forEach(slide => slide.classList.add('hidden'));
    document.getElementById('cover').classList.remove('hidden');  // Vissza a borítóra
    currentSlide = 0;  // A borítóra tér vissza
}

// A borítóra kattintva kezdjünk
document.getElementById('startButton').addEventListener('click', function() {
    // Elrejtjük a borítót
    document.getElementById('cover').classList.add('hidden');
    // Az első diát megjelenítjük
    nextSlide(1);
});
