// Tous mes scripts JavaScript pour le site 

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


// script JS pour la gestion des Modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
