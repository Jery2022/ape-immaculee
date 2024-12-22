// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Code JavaScript pour des interactions dynamiques
    console.log('DOM entièrement chargé et analysé');
    
    // Exemple : Validation du formulaire de contact
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Validation et soumission du formulaire
        alert('Formulaire soumis avec succès');
    });
});
