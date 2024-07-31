// const forms = document.getElementById("forms")
// forms.addEventListener("submit", (Event) =>{
//     Event.preventDefault ()

//     let baliseName = document.getElementById ("name").value
//     // let name = baliseName.value

//     let baliseemail = document.getElementById ("email").value
//     // let email = baliseemail.value

//     let phonette = document.getElementById ("phone").value
//     // let phone = phonette.value

//     let yes = document.getElementById ("consent-yes")
//     let no = document.getElementById ("consent-no")
//     if (yes) {
//         console.log("Il continue pas");
//     }

//     if (no) {
//         console.log("Il continue pas");
//     }

// });

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.getElementById('forms');

    forms.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche le formulaire de soumettre et de recharger la page

        // Récupération des valeurs des champs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const firstname = document.getElementById(`firstname`).value;
        const âge  = document.getElementById(`âge`).value;
        const Sexe  = document.getElementById(`Sexe`).value;

        // Vérification de la réponse Oui/Non
        const consentNo = document.getElementById('consent-no')
        const consentYes = document.getElementById('consent-yes')

        // Affichage des valeurs dans la console
        console.log(`Nom : ${name}`);
        console.log(`Email : ${email}`);
        console.log(`Téléphone : ${phone}`);
        console.log(`Prenom: ${firstname}`);
        console.log(`âge : ${âge}`);
        console.log(`Sexe : ${Sexe}`);

        if (consentYes) {
            console.log('Réponse : oui');
        } else if (consentNo) {
            console.log('awser : Non');
        } else {
            console.error('Erreur : Aucune réponse Oui/Non sélectionnée.');
        }

        // Affichage de la sélection du référentiel
        const reference = document.getElementById('reference').value;
        console.log(`Référentiel choisi : ${reference}`);

        // Réinitialiser le formulaire après soumission
        forms.reset();
    });
});
