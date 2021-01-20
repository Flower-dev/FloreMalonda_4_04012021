// DOM Elements
const modalbg = document.querySelector(".bground"); // constante permettant de gérer le bground
const modalBtn = document.querySelectorAll(".modal-btn"); // constante permettant au clic sur le btn de faire apparaître le formulaire
const formData = document.querySelectorAll(".formData"); //L'objet FormData permet de créer un ensemble de paires clef-valeur (très utilisé dans les formulaires)
const closeModalBtn = document.querySelectorAll(".close") //fermer le formulaire
const confirmationCloseBtn = document.querySelector("#btn-closed"); // bouton "fermer"
const menuResponsive = document.querySelector("#myTopnav .icon")
const topNav = document.querySelector("#myTopnav")

// ------ element correspondant au bouton --------
const formValid = document.querySelector("#btn-submit");

// ------- element quand c'est OK ----------
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const eMail = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const eventParticipation = document.querySelector("#quantity");
const eventCity = document.querySelectorAll('.checkbox-input[name="location"]');
const cgu = document.querySelector("#checkbox1");

// ------- element quand c'est une erreur ----------
const errorFirstName = document.querySelector("#missfirst");
const errorLastName = document.querySelector("#misslast");
const errorMail = document.querySelector("#missemail");
const errorBirthDate = document.querySelector("#missbirthdate");
const errorEventParticipation = document.querySelector("#missquantity");
const errorEventCity = document.querySelector("#misslocalisation");
const errorCgu = document.querySelector("#misscheckbox1");
const numbersValue = /[0-9]/;

const confirmationValidation = document.querySelector("#confirm-modal");

// ------------ element pour l'envoi du formulaire ------------------------
const form = document.querySelector('form[name="reserve"]')


// --------- gestion du menu hambuger (responsive) ------------
menuResponsive.addEventListener('click', editNav); // --------- A REVOIR ------

function editNav(event) {
    event.preventDefault();
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "topnav";
    }
}

// ---------- Launch Modal Form ---------
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = 'block';
    confirmationValidation.style.display = 'none';
}

// ---- Close Modal Form ---------

closeModalBtn[0].addEventListener("click", closeModal);

function closeModal() {
    modalbg.style.display = 'none';
    form.style.display = 'block';
    confirmationValidation.style.display = 'none';
}

// ------------ Envoi du formulaire d'inscription ------------------

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validate();
});


// ------------------- validation formulaire par input -----------

function validateFirstName(firstName) {
  if (firstName.value.toString().trim().length < 2) {
      errorFirstName.style.display = "inline";
      errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
      errorFirstName.style.color = 'red';
      errorFirstName.style.fontSize = '0.8rem';
      errorFirstName.style.marginTop = '10px';
      firstName.style.border = 'solid red 2px';
      return false;
  } else {
      errorFirstName.style.display = 'none';
      firstName.style.border = 'solid #279e7a 3px';
      return true; 
  };
}

function validateLastName(lastName) {
  if (lastName.value.toString().trim().length < 2) {
      errorLastName.style.display = 'inline';
      errorLastName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
      errorLastName.style.color = 'red';
      errorLastName.style.fontSize = '0.8rem';
      errorLastName.style.marginTop = '10px';
      lastName.style.border = 'solid red 2px';
      return false;
  } else {
      errorLastName.style.display = 'none';
      lastName.style.border = 'solid #279e7a 3px';
      return true;
  }
}

function validateEmail(eMail) {
  if (!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(eMail.value)) {
      errorMail.style.display = "inline"
      errorMail.innerText = "Veuillez entrer une adresse mail valide.";
      errorMail.style.color = 'red';
      errorMail.style.fontSize = '0.8rem';
      errorMail.style.marginTop = '10px';
      eMail.style.border = 'solid red 2px';
      return false;
  } else {
      errorMail.style.display = 'none';
      eMail.style.border = 'solid #279e7a 3px';
      return true;
  }
}

function validateBirthdate(birthDate) {
  if (!birthDate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
      errorBirthDate.style.display = "inline";
      errorBirthDate.innerText = "Veuillez indiquer votre date de naissance.";
      errorBirthDate.style.color = 'red';
      errorBirthDate.style.fontSize = '0.8rem';
      errorBirthDate.style.marginTop = '10px';
      birthDate.style.border = 'solid red 2px';
      return false;
  } else {
      errorBirthDate.style.display = 'none';
      birthDate.style.border = 'solid #279e7a 3px';
      return true;
  };
}

function validateEventParticipation(eventParticipation) {
  if (!eventParticipation.value.match(numbersValue)) {
      errorEventParticipation.style.display = "inline";
      errorEventParticipation.innerText = "Veuillez indiquer un nombre de participation à nos tournois."
      errorEventParticipation.style.color = 'red';
      errorEventParticipation.style.fontSize = '0.8rem';
      errorEventParticipation.style.marginTop = '10px';
      errorEventParticipation.style.border = 'solid red 2px';
    return false;
  } else {
      errorEventParticipation.style.display = 'none';
      eventParticipation.style.border = 'solid #279e7a 3px';
      return true;
  };
}

function validateEventCity(eventCity) {
  let eventCityChecked = 0;
  eventCity.forEach(i => {
    if (i.checked) {
      eventCityChecked++;
    }
  })
  
  if (eventCityChecked === 0) {
        errorEventCity.style.display = "inline";
        errorEventCity.innerText = "Veuillez choisir une ou plusieurs ville(s).";
        errorEventCity.style.color = 'red';
        errorEventCity.style.fontSize = '0.8rem';
        errorEventCity.style.marginTop = '10px';
        return false;
    } else {
        errorEventCity.style.display = 'none';
        return true;
    };
}

function validateCgu(cgu) {
  if (cgu.checked == false) {
      errorCgu.style.display = "inline";
      errorCgu.innerText = "Vous devez accepter les termes et conditions.";
      errorCgu.style.color = 'red';
      errorCgu.style.fontSize = '0.8rem';
      errorCgu.style.marginTop = '10px';
      return false;
  } else {
      errorCgu.style.display = 'none';
      return true;
  }; 
}

// -------------------- Validation du formulaire ----------------------

function validate() {
// ne pas oublier de déclarer une variable
  let isFormValidate = [];

  isFormValidate.push(validateFirstName(firstName));
  isFormValidate.push(validateLastName(lastName));
  isFormValidate.push(validateEmail(eMail));
  isFormValidate.push(validateBirthdate(birthDate));
  isFormValidate.push(validateEventParticipation(eventParticipation));
  isFormValidate.push(validateEventCity(eventCity));
  isFormValidate.push(validateCgu(cgu));

  if (!isFormValidate.includes(false)) {
      form.style.display = 'none';
      confirmationValidation.style.display = 'flex';
  }
}

// ------- Fermer le formulaire avec le message de validation ---------

document.querySelector("#btn-closed").addEventListener("click", closeModal);


// -------------------- Ancienne version Validation du formulaire ----------------------
/*function validateFirstName(firstName) {
    const formDataFirstName = document.querySelector('#formDataFirstName');
    if (firstName.value.toString().trim().length < 2) {
        errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
        formDataFirstName.classList.add("error")
        return false;
    } else {
        formDataFirstName.classList.remove("error")
        formDataFirstName.classList.add("success")
        return true;
    }
}*/


/*
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
  if (firstName.value.toString().trim().length < 2) {
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
    if (lastName.value.toString().trim().length < 2) {
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

}*/
