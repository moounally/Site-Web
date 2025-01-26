document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Sélection des éléments
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const closeMenuButton = document.querySelector('.close-menu');

    if (hamburger && navMenu && closeMenuButton) {
        // Fonction pour ouvrir le menu
        const openMenu = () => {
            navMenu.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            console.log('Menu ouvert');
        };

        // Fonction pour fermer le menu
        const closeMenu = () => {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            console.log('Menu fermé');
        };

        // Événement clic sur le hamburger pour ouvrir le menu
        hamburger.addEventListener('click', openMenu);

        // Événement clic sur le bouton de fermeture pour fermer le menu
        closeMenuButton.addEventListener('click', closeMenu);

        // Accessibilité clavier (Entrée et Espace) pour ouvrir le menu
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openMenu();
            }
        });

        // Accessibilité clavier (Entrée et Espace) pour fermer le menu
        closeMenuButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                closeMenu();
            }
        });

        // Fermer le menu lorsqu'un lien est cliqué
        const navLinks = document.querySelectorAll('.nav-menu ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Fermer le menu en cliquant en dehors (facultatif)
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    closeMenu();
                }
            }
        });
    } else {
        console.warn('Éléments du menu non trouvés');
    }

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
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
                        formMessage.classList.remove('error');
                        formMessage.style.display = 'block';
                        contactForm.reset(); // Réinitialise le formulaire
                        console.log('Formulaire de contact envoyé avec succès');
                    } else {
                        throw new Error('Erreur serveur');
                    }
                })
                .catch(() => {
                    formMessage.innerHTML = `
                        <p>Oups ! Une erreur s'est produite. Veuillez réessayer plus tard.</p>
                    `;
                    formMessage.classList.add('error');
                    formMessage.classList.remove('success');
                    formMessage.style.display = 'block';
                    console.error('Erreur lors de l\'envoi du formulaire de contact');
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
                        console.log('Formulaire de témoignage envoyé avec succès');
                    } else {
                        throw new Error('Erreur serveur');
                    }
                })
                .catch(() => {
                    alert("Oups ! Une erreur s'est produite. Veuillez réessayer plus tard.");
                    console.error('Erreur lors de l\'envoi du formulaire de témoignage');
                });
        });
    }

    // Gestion du quiz de simulation
    const quizSimulationForm = document.getElementById('quiz-simulation-form');
    const quizSimulationResult = document.getElementById('quiz-simulation-result');

    if (quizSimulationForm && quizSimulationResult) {
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
                const userAnswer = quizSimulationForm[questionId]?.value.trim().toLowerCase();
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
            console.log(`Quiz terminé avec un score de ${score}/4`);
        });
    }
});
