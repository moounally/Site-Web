document.addEventListener('DOMContentLoaded', () => {
    // Simulation de Déficience Visuelle sur la Page Démos
    const blurRange = document.getElementById('blur-range');
    const simulationContent = document.getElementById('simulation-content');

    if (blurRange && simulationContent) {
        blurRange.addEventListener('input', () => {
            const blurValue = blurRange.value;
            simulationContent.style.filter = `blur(${blurValue}px)`;
        });
    }

    // Formulaire de Contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Vous pouvez ajouter une logique pour envoyer les données via AJAX
            alert('Merci pour votre message !');
            contactForm.reset();
        });
    }

    // Formulaire de Témoignage
    const temoignageForm = document.getElementById('témoignage-form');
    if (temoignageForm) {
        temoignageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Logic pour ajouter le témoignage en temps réel (simulé ici)
            const prenom = document.getElementById('prenom').value;
            const message = document.getElementById('message').value;
            const evaluation = document.getElementById('évaluation').value;

            const newTemoignage = document.createElement('div');
            newTemoignage.classList.add('témoignage');
            newTemoignage.innerHTML = `
                <h2>${prenom}</h2>
                <p>${message}</p>
                <p>Évaluation : ${'⭐'.repeat(evaluation)}</p>
            `;
            document.querySelector('main').appendChild(newTemoignage);
            temoignageForm.reset();
        });
    }

    // Quiz Interactif
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');
    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simple logique de quiz
            const q1 = quizForm.q1.value;
            let score = 0;
            if (q1 === 'a2') score += 1; // Supposons que 'a2' est la bonne réponse

            quizResult.innerHTML = `<p>Votre score : ${score}/1</p>`;
        });
    }

    // Boutons de Simulation Ateliers
    const textureButton = document.getElementById('texture-simulation');
    if (textureButton) {
        textureButton.addEventListener('click', () => {
            alert('Simulation de la Chambre des Textures en cours...');
            // Ajoutez ici la logique de simulation
        });
    }

    const parcoursButton = document.getElementById('parcours-simulation');
    if (parcoursButton) {
        parcoursButton.addEventListener('click', () => {
            alert('Simulation du Parcours Sensoriel en cours...');
            // Ajoutez ici la logique de simulation
        });
    }

    // Animation de Perte de Vision à l'Arrivée
    const body = document.body;
    gsap.from(body, { duration: 2, filter: 'blur(10px)', opacity: 0, ease: 'power2.out' });
});
