document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            body.classList.add("scrolled");
        } else {
            body.classList.remove("scrolled");
        }
    });
});


document.getElementById('location-link').addEventListener('click', function (e) {
    e.preventDefault(); // Verhindert das Standardverhalten
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isIOS) {
        // Weiterleiten zu Apple Maps
        window.location.href = "https://maps.apple.com/?q=Hauptstrasse+115A,+9430+St.Margrethen,+Schweiz";
    } else {
        // Weiterleiten zu Google Maps
        window.location.href = "https://www.google.com/maps?q=Hauptstrasse+115A,+9430+St.Margrethen,+Schweiz";
    }
});


// Funktion zum Ein- und Ausklappen der Job-Beschreibungen
function toggleDropdown(element) {
    const description = element.nextElementSibling; // Holt das nächste Element (job-description)
    const toggleIcon = element.querySelector('.toggle-icon'); // Holt das Plus-/Minus-Icon

    // Toggle der Anzeige der Beschreibung
    if (description.style.display === "block") {
        description.style.display = "none";
        toggleIcon.textContent = "+"; // Ändert Icon zu "+"
    } else {
        description.style.display = "block";
        toggleIcon.textContent = "−"; // Ändert Icon zu "−"
    }
}

