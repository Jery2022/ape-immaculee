// Tous mes scripts JavaScript pour le site 

document.addEventListener('DOMContentLoaded', function() {
  // Code JavaScript pour des interactions dynamiques
    console.log('DOM entièrement chargé et analysé');
  
    /*  Validation du formulaire de contact */
    const contactForm = document.querySelector('#contact-form'); // Utilise l'ID du formulaire de contact
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche la soumission par défaut du formulaire
            
            // Réinitialiser les messages d'erreur
            clearErrorMessages();

            let isValid = true;

            // Validation du champ Nom
            const nameInput = document.getElementById('user_name'); // Utilise l'ID du champ nom
            if (nameInput && nameInput.value.trim() === '') {
                displayErrorMessage('user_name_error', 'Le nom est requis.'); // Ajout d'un ID pour le message d'erreur
                isValid = false;
            }

            // Validation du champ Email
            const emailInput = document.getElementById('user_email'); // Utilise l'ID du champ email
            if (emailInput) {
                if (emailInput.value.trim() === '') {
                    displayErrorMessage('user_email_error', 'L\'adresse email est requise.'); // Ajout d'un ID pour le message d'erreur
                    isValid = false;
                } else if (!isValidEmail(emailInput.value.trim())) {
                    displayErrorMessage('user_email_error', 'Veuillez entrer une adresse email valide.');
                    isValid = false;
                }
            }

            // Validation du champ Message
            const messageInput = document.getElementById('message'); // Utilise l'ID du champ message
            if (messageInput && messageInput.value.trim() === '') {
                displayErrorMessage('message_error', 'Le message est requis.'); // Ajout d'un ID pour le message d'erreur
                isValid = false;
            }

            if (isValid) {
                // Si toutes les validations passent, vous pouvez soumettre le formulaire ou faire une requête AJAX
                alert('Formulaire soumis avec succès !');
                // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire, par exemple avec fetch()
                // contactForm.submit(); // Pour une soumission HTML standard
            } else {
                alert('Veuillez corriger les erreurs dans le formulaire.');
            }
        });
    }

    // Fonction pour valider le format de l'email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Fonction pour afficher les messages d'erreur
    function displayErrorMessage(elementId, message) {
        let errorElement = document.getElementById(elementId);
        if (!errorElement) {
            // Si l'élément d'erreur n'existe pas, le créer et l'insérer après le champ concerné
            const inputId = elementId.replace('_error', '');
            const inputElement = document.getElementById(inputId);
            if (inputElement) {
                errorElement = document.createElement('div');
                errorElement.id = elementId;
                inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
            }
        }
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.color = 'red';
            errorElement.style.fontSize = '0.9em';
        }
    }

    // Fonction pour effacer tous les messages d'erreur
    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('[id$="_error"]'); // Sélectionne tous les éléments dont l'ID se termine par "_error"
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
});



/* script JS pour la gestion des Modal */
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

/* script JS pour soumettre le formulaire */
function submitForm() {
  const name = document.getElementById('donorName').value;
  const email = document.getElementById('donorEmail').value;
  const amount = document.getElementById('donationAmount').value;

  const data = {
      donorName: name,
      donorEmail: email,
      donationAmount: amount
  };

  fetch('https://http://127.0.0.1:5500/enregistrer_don', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      if (response.ok) {
          alert('Merci pour votre don !');
          document.getElementById('donationForm').reset(); // Réinitialiser le formulaire
      } else {
          alert('Erreur lors de l\'enregistrement du don.');
      }
  })
  .catch(error => {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
  });
}
