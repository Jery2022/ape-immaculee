import { apiKey, serviceID, templateID } from './assets/Config/secrets.js';
    
/* initialisation de l'API EmailJS */
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: apiKey,
    });
})();


// script JS pour la gestion de l'envoie de l'email
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                console.log('SUCCESS!');
                alert('Votre message a bien été envoyé');
                document.getElementById('contact-form').reset();
            }, (error) => {
                console.log('FAILED...', error);
                alert('Une erreur est survenue lors de l\'envoi de votre message');
                document.getElementById('contact-form').reset();
            });
    });
}