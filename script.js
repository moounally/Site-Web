document.addEventListener('DOMContentLoaded', () => {
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci pour votre message !');
            contactForm.reset();
        });
    }

    // Gestion du formulaire de témoignage
    const temoignageForm = document.getElementById('temoignage-form');
    if (temoignageForm) {
        temoignageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const prenom = document.getElementById('prenom').value;
            const message = document.getElementById('message').value;
            const evaluation = document.getElementById('evaluation').value;

            const newTemoignage = document.createElement('div');
            newTemoignage.classList.add('temoignage');
            newTemoignage.innerHTML = `
                <h2>${prenom}</h2>
                <p>${message}</p>
                <p>Évaluation : ${'⭐'.repeat(evaluation)}</p>
            `;
            document.querySelector('main').appendChild(newTemoignage);
            temoignageForm.reset();
        });
    }

    // Gestion du quiz interactif
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');
    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const q1 = quizForm.q1.value;
            let score = 0;
            if (q1 === 'a2') score += 1;

            quizResult.innerHTML = `<p>Votre score : ${score}/1</p>`;
        });
    }

    // Gestion du quiz de simulation
    const quizSimulationForm = document.getElementById('quiz-simulation-form');
    const quizSimulationResult = document.getElementById('quiz-simulation-result');

    if (quizSimulationForm) {
        quizSimulationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Les réponses correctes
            const answers = {
                'image1-answer': 'calculatrice',
                'image2-answer': 'bouteille_eau',
                'image3-answer': 'clef',
                'image4-answer': 'trousse'
            };

            let score = 0;

            // Vérification des réponses utilisateur
            for (const [question, correctAnswer] of Object.entries(answers)) {
                const userAnswer = quizSimulationForm[question]?.value;
                if (userAnswer === correctAnswer) {
                    score++;
                }
            }

            // Affichage des résultats
            quizSimulationResult.innerHTML = `
                <p>Votre score : ${score}/4</p>
                ${score === 4 ? '<p>Félicitations, vous avez tout juste !</p>' : '<p>Essayez encore pour améliorer votre score.</p>'}
            `;
        });
    }
});
