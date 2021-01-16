// DOM Elements
const modalbg = document.querySelector(".bground"); // constante permettant de gérer le bground
const modalBtn = document.querySelectorAll(".modal-btn"); // constante permettant au clic sur le btn de faire apparaître le formulaire
const formData = document.querySelectorAll(".formData"); //L'objet FormData permet de créer un ensemble de paires clef-valeur (très utilisé dans les formulaires)
const closeModalBtn = document.querySelector(".close") //fermer le formulaire

//const confirmationCloseBtn = document.getElementById("btn-closed"); bouton "fermer"

// ----------- Validation du formulaire d'inscription ------------

// ------ element correspondant au bouton --------
const formValid = document.getElementById("btn-submit");

// ------- element quand c'est OK ----------
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const eventParticipation = document.querySelector("#quantity");
const eventCity = document.querySelectorAll('.checkbox-input[name="location"]');
const cgu = document.getElementById("checkbox1");

// ------- element quand c'est une erreur ----------
const errorFirstName = document.getElementById("missfirst");
const errorLastName = document.getElementById("misslast");
const errorMail = document.getElementById("missemail");
const errorBirthDate = document.getElementById("missbirthdate");
const errorEventParticipation = document.getElementById("missquantity");
const errorEventCity = document.getElementById("misslocalisation");
const errorCgu = document.getElementById("misscheckbox1");
const numbersValue = /[0-9]/;

const confirmationValidation = document.getElementById("confirm-modal");
const confirmationCloseBtn = document.getElementById("btn-closed");


/* fonction permettant de gérer l'apparition et la
disparition du mode menu hamburger
*/
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ---------- Faire apparaitre le formulaire en appuyant sur le bouton "je m'inscris" ---------
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
  confirmationValidation.style.display = 'none';
}

// ---- Fermer le formulaire : Close Modal Form ---------

closeModalBtn[0].addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = 'none';
  form.style.display = 'block';
  confirmationValidation.style.display = 'none';
}

function validate() {

  // liste des variables appelées dans la fonction

    let firstNameChecked;
    let lastNameChecked;
    let mailChecked;
    let birthDateChecked;
    let eventParticipationChecked;
    let eventCityChecked = false;
    let cguChecked;


  // pour la validation du prénom - si présence d'1 des 3 erreurs ci-dessous envoyer un message d'erreur sinon OK
  if (firstName.value === '' || firstName.value == null || firstName.value.length < 2) {
    errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    errorFirstName.style.color = 'red';
    errorFirstName.style.fontSize = '0.8rem';
    errorFirstName.style.marginTop = '10px';
    firstName.style.border = 'solid red 2px';
    return false;
  } else {
    errorFirstName.style.display = 'none';
    firstName.style.border = 'solid green 2px';
    firstName.innerText = "Champ valide";
    firstName.style.color = 'green';
    firstName.style.fontSize = '0.8rem';
    firstName.style.marginTop = '10px';
    firstNameChecked = true;
  };

  // pour la validation du nom - si présence d'1 des 3 erreurs ci-dessous envoyer un message d'erreur sinon OK
    if (lastName.value === '' || lastName.value == null || lastName.value.length < 2) {
    errorLastName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
    errorLastName.style.color = 'red';
    errorLastName.style.fontSize = '0.8rem';
    errorLastName.style.marginTop = '10px';
    lastName.style.border = 'solid red 2px';
    return false;
  } else {
    errorLastName.style.display = 'none';
    lastName.style.border = 'solid green 2px';
    lastName.innerText = "Champ valide";
    lastName.style.color = 'green';
    lastName.style.fontSize = '0.8rem';
    lastName.style.marginTop = '10px';
    lastNameChecked = true;
  };

  // expression régulière pour tester une adresse mail en JS : /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  // pour la validation de l'adresse mail il faut que cette expression régulière soit valide -- sinon afficher une alerte
  if (!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(eMail.value)) {
    errorMail.innerText = "Veuillez entrer une adresse mail valide.";
    errorMail.style.color = 'red';
    errorMail.style.fontSize = '0.8rem';
    errorMail.style.marginTop = '10px';
    eMail.style.border = 'solid red 2px';
    return false;
  } else {
    errorMail.style.display = 'none';
    eMail.style.border = 'solid green 2px';
    eMail.innerText = "Champ valide";
    eMail.style.color = 'green';
    eMail.style.fontSize = '0.8rem';
    eMail.style.marginTop = '10px';
    mailChecked = true;
  };

  // ----- TO DO : partie à vérifier car pb au niveau de la validation de la date ----------
  if (!birthDate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
    errorBirthDate.innerText = "Veuillez indiquer votre date de naissance.";
    errorBirthDate.style.color = 'red';
    errorBirthDate.style.fontSize = '0.8rem';
    errorBirthDate.style.marginTop = '10px';
    birthDate.style.border = 'solid red 2px';
    return false;
    } else {
    errorBirthDate.style.display = 'none';
    birthDate.style.border = 'solid green 2px';
    birthDateChecked = true;
  };

  //vérification du nombre de participation
  console.log(eventParticipation.value)
  if (!eventParticipation.value.match(numbersValue)) {
    errorEventParticipation.innerText = "Veuillez indiquer un nombre de participation à nos tournois."
    errorEventParticipation.style.color = 'red';
    errorEventParticipation.style.fontSize = '0.8rem';
    errorEventParticipation.style.marginTop = '10px';
    errorEventParticipation.style.border = 'solid red 2px';
    return false;
  } else {
    errorEventParticipation.style.display = 'none';
    eventParticipation.style.border = 'solid green 2px';
    eventParticipationChecked = true;
  };

  //vérification des localisations --- 

  eventCity.forEach(function(e){
    if(!eventCityChecked){
      eventCityChecked = e.checked
    }
  })

  if (!eventCityChecked) {
    errorEventCity.innerText = "Veuillez choisir une ou plusieurs ville(s).";
    errorEventCity.style.color = 'red';
    errorEventCity.style.fontSize = '0.8rem';
    errorEventCity.style.marginTop = '10px';
    return false;
  } else {
    errorEventCity.style.display = 'none';
    eventCityChecked = true;
  };

  // vérification de la validation des conditions générales d'utilisation (CGU) --- 

  if (cgu.checked == false) {
    errorCgu.innerText = "Vous devez accepter les termes et conditions.";
    errorCgu.style.color = 'red';
    errorCgu.style.fontSize = '0.8rem';
    errorCgu.style.marginTop = '10px';
    return false;
  } else {
    errorCgu.style.display = 'none';
    cguChecked = true;
  };


  // ensemble des conditions à valider pour que le formulaire = OK
  if (firstNameChecked == true && lastNameChecked == true
    && mailChecked == true && birthDateChecked == true
    && eventParticipationChecked == true && eventCityChecked == true
    && cguChecked == true) {
    form.style.display = 'none';
    confirmationValidation.style.display = 'flex';
  } else {
    form.style.display = 'flex';
    confirmationValidation.style.display = 'none';
  };

}


// ------- Fermer le formulaire avec le message de validation ---------

document.getElementById("btn-closed").addEventListener("click", closeModal);

const form = document.querySelector('form[name="reserve"]')
form.addEventListener('submit', function(e){
  e.preventDefault();
  validate();
})
