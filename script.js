// Afficher le bouton si l'utilisateur défile vers le bas
window.addEventListener("scroll", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (window.scrollY > 300) { // Afficher après 300px de défilement
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Fonction pour remonter en haut
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Défilement fluide
    });
}

