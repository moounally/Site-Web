document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des animations AOS
    AOS.init({
        duration: 1200,
    });

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
            // Logique pour envoyer les données via AJAX ou autre méthode
            alert('Merci pour votre message !');
            contactForm.reset();
        });
    }

    // Formulaire de Témoignage
    const temoignageForm = document.getElementById('temoignage-form');
    if (temoignageForm) {
        temoignageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Logique pour ajouter le témoignage en temps réel (simulé ici)
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

    // Quiz Interactif
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');
    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Logique de quiz
            const q1 = quizForm.q1.value;
            let score = 0;
            if (q1 === 'a2') score += 1; // Supposons que 'a2' est la bonne réponse

            quizResult.innerHTML = `<p>Votre score : ${score}/1</p>`;
        });
    }

    // Quiz Simulation
    const quizSimulationForm = document.getElementById('quiz-simulation-form');
    const quizSimulationResult = document.getElementById('quiz-simulation-result');
    if (quizSimulationForm) {
        quizSimulationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const image1 = quizSimulationForm['image1-answer'].value;
            const image2 = quizSimulationForm['image2-answer'].value;
            const image3 = quizSimulationForm['image3-answer'].value;
            const image4 = quizSimulationForm['image4-answer'].value;
            let score = 0;
            if (image1 === 'calculatrice') score += 1;
            if (image2 === 'bouteille_eau') score += 1;
            if (image3 === 'clef') score += 1;
            if (image4 === 'trousse') score += 1;

            quizSimulationResult.innerHTML = `<p>Votre score : ${score}/4</p>`;
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

    // Quiz Images - Déflou au Clic
    const images = document.querySelectorAll('.blur');
    images.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('blur');
        });
    });
});
