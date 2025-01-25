document.addEventListener('DOMContentLoaded', () => {
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche l'envoi par défaut du formulaire

            // Envoi des données via Fetch API
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            })
                .then((response) => {
                    if (response.ok) {
                        formMessage.innerHTML = `
                            <p>Merci pour votre message ! Nous reviendrons vers vous très bientôt.</p>
                        `;
                        formMessage.classList.add('success');
                        contactForm.reset(); // Réinitialise le formulaire
                    } else {
                        formMessage.innerHTML = `
                            <p>Oups ! Une erreur s'est produite. Veuillez réessayer plus tard.</p>
                        `;
                        formMessage.classList.add('error');
                    }
                })
                .catch(() => {
                    formMessage.innerHTML = `
                        <p>Oups ! Une erreur s'est produite. Veuillez vérifier votre connexion et réessayer.</p>
                    `;
                    formMessage.classList.add('error');
                });
        });
    }

    // Gestion du formulaire de témoignage (connecté à Formspree)
    const temoignageForm = document.getElementById('temoignage-form');

    if (temoignageForm) {
        temoignageForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page

            // Envoi des données via Formspree
            const formData = new FormData(temoignageForm);
            fetch(temoignageForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Merci pour votre témoignage ! Nous l'avons bien reçu.");
                        temoignageForm.reset(); // Réinitialise le formulaire
                    } else {
                        alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
                    }
                })
                .catch(() => {
                    alert("Erreur de connexion. Vérifiez votre réseau et réessayez.");
                });
        });
    }

    // Gestion du quiz de simulation
    const quizSimulationForm = document.getElementById('quiz-simulation-form');
    const quizSimulationResult = document.getElementById('quiz-simulation-result');

    if (quizSimulationForm) {
        quizSimulationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Les réponses correctes
            const correctAnswers = {
                'image1-answer': 'calculatrice',
                'image2-answer': 'bouteille_eau',
                'image3-answer': 'clef',
                'image4-answer': 'trousse'
            };

            let score = 0;

            // Vérification des réponses utilisateur
            Object.keys(correctAnswers).forEach((questionId) => {
                const userAnswer = quizSimulationForm[questionId]?.value;
                if (userAnswer === correctAnswers[questionId]) {
                    score++;
                }
            });

            // Affichage des résultats
            quizSimulationResult.innerHTML = `
                <p>Votre score : ${score}/4</p>
                ${score === 4 
                    ? '<p>Félicitations, vous avez tout juste !</p>' 
                    : '<p>Essayez encore pour améliorer votre score.</p>'}
            `;
            quizSimulationResult.style.display = 'block';
        });
    }
});
