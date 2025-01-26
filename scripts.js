$(document).ready(function() {
    // Ouvrir le menu de navigation mobile
    $('#header__icon').on('click', function() {
        $('.nav-menu').addClass('active').fadeIn(300);
        $(this).attr('aria-expanded', 'true');
    });

    // Fermer le menu de navigation mobile
    $('#close__icon').on('click', function() {
        $('.nav-menu').removeClass('active').fadeOut(300);
        $('#header__icon').attr('aria-expanded', 'false');
    });

    // Fermer le menu en cliquant sur un lien
    $('.nav-menu ul li a').on('click', function() {
        $('.nav-menu').removeClass('active').fadeOut(300);
        $('#header__icon').attr('aria-expanded', 'false');
    });

    // Fermer le menu en cliquant en dehors du menu
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.nav-menu, #header__icon').length) {
            if ($('.nav-menu').hasClass('active')) {
                $('.nav-menu').removeClass('active').fadeOut(300);
                $('#header__icon').attr('aria-expanded', 'false');
            }
        }
    });

    // Fermer le menu avec la touche Échap
    $(document).on('keydown', function(event) {
        if (event.key === "Escape") {
            if ($('.nav-menu').hasClass('active')) {
                $('.nav-menu').removeClass('active').fadeOut(300);
                $('#header__icon').attr('aria-expanded', 'false');
            }
        }
    });

    // Gestion du formulaire de contact
    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Empêche l'envoi par défaut du formulaire

        // Envoi des données via Fetch API
        var formData = new FormData(this);
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            if (response.ok) {
                $('#form-message').html('<p>Merci pour votre message ! Nous reviendrons vers vous très bientôt.</p>')
                                 .addClass('success').removeClass('error').fadeIn();
                $('#contact-form')[0].reset(); // Réinitialise le formulaire
                console.log('Formulaire de contact envoyé avec succès');
            } else {
                throw new Error('Erreur serveur');
            }
        })
        .catch(function(error) {
            $('#form-message').html('<p>Oups ! Une erreur s\'est produite. Veuillez réessayer plus tard.</p>')
                             .addClass('error').removeClass('success').fadeIn();
            console.error('Erreur lors de l\'envoi du formulaire de contact');
        });
    });

    // Gestion du formulaire de témoignage (connecté à Formspree)
    $('#temoignage-form').on('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page

        // Envoi des données via Formspree
        var formData = new FormData(this);
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            if (response.ok) {
                alert("Merci pour votre témoignage ! Nous l'avons bien reçu.");
                $('#temoignage-form')[0].reset(); // Réinitialise le formulaire
                console.log('Formulaire de témoignage envoyé avec succès');
            } else {
                throw new Error('Erreur serveur');
            }
        })
        .catch(function(error) {
            alert("Oups ! Une erreur s'est produite. Veuillez réessayer plus tard.");
            console.error('Erreur lors de l\'envoi du formulaire de témoignage');
        });
    });

    // Gestion du quiz de simulation
    $('#quiz-simulation-form').on('submit', function(e) {
        e.preventDefault();

        // Les réponses correctes
        var correctAnswers = {
            'image1-answer': 'calculatrice',
            'image2-answer': 'bouteille_eau',
            'image3-answer': 'clef',
            'image4-answer': 'trousse'
        };

        var score = 0;

        // Vérification des réponses utilisateur
        $.each(correctAnswers, function(questionId, answer) {
            var userAnswer = $('#' + questionId).val().trim().toLowerCase();
            if (userAnswer === answer) {
                score++;
            }
        });

        // Affichage des résultats
        var resultText = '<p>Votre score : ' + score + '/4</p>';
        if (score === 4) {
            resultText += '<p>Félicitations, vous avez tout juste !</p>';
        } else {
            resultText += '<p>Essayez encore pour améliorer votre score.</p>';
        }

        $('#quiz-simulation-result').html(resultText).fadeIn();
        console.log('Quiz terminé avec un score de ' + score + '/4');
    });


    // Gestion du quiz sur le nombre de handicap visuel
    $('#quiz-form').on('submit', function(e) {
        e.preventDefault();
        console.log('Quiz nombre de handicap visuel soumis'); // Vérifie si l'événement est déclenché

        // La réponse correcte
        var correctAnswer = 'a3'; // Valeur de l'option "250 millions"

        // Récupérer la réponse de l'utilisateur
        var userAnswer = $('input[name="q1"]:checked').val();
        console.log('Réponse utilisateur: ' + userAnswer);

        // Affichage des résultats
        var resultText = '';

        if (userAnswer === correctAnswer) {
            resultText = '<p>Bonne réponse ! 250 millions de personnes sont concernées par le handicap visuel dans le monde.</p>';
        } else {
            // Trouver le texte de l'option correcte
            var correctLabel = $('input[name="q1"][value="' + correctAnswer + '"]').next('label').text();
            resultText = '<p>Mauvaise réponse. La bonne réponse est : ' + correctLabel + '.</p>';
        }

        $('#quiz-result').html(resultText).fadeIn();
        console.log('Quiz nombre de handicap visuel terminé');
    });
});
