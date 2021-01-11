/*
INFO PERSO : Faire la différence entre getElementById() & querySelector()

La méthode getElementById() de Document renvoie un objet  Element 
représentant l'élément dont la propriété  id correspond à la chaîne 
de caractères spécifiée. Étant donné que les ID d'élément doivent être uniques, 
s'ils sont spécifiés, ils constituent un moyen utile d'accéder rapidement à 
un élément spécifique.

Si vous avez besoin d'accéder à un élément qui n'a pas d'ID, 
vous pouvez utiliser querySelector() pour trouver l'élément 
en utilisant un sélecteur.
*/

/*
INFO PERSO 2 : La différence entre `var` & `let`

`let` permet de déclarer des variables dont la portée est limitée à celle du bloc dans 
lequel elles sont déclarées. Le mot-clé `var`, quant à lui, permet de définir une variable globale ou 
locale à une fonction (sans distinction des blocs utilisés dans la fonction).

Une autre différence entre `let` et `var` est la façon dont 
la variable est initialisée : pour `let`, la variable est initialisée à 
l'endroit où le parseur évalue son contenu.
*/


/* fonction permettant de gérer l'apparition et la
disparition du mode menu hamburger
*/ 
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/*
INFO PERSO 3 : Qu'est ce qu'un DOM ?
Le DOM, qui signifie Document Object Model (c'est-à-dire "modèle d'objet de document", en français), 
est une interface de programmation qui est une représentation du HTML d'une page web et qui permet 
d'accéder aux éléments de cette page web et de les modifier avec le langage JavaScript. 
*/

// DOM Elements
const modalbg = document.querySelector(".bground"); // constante permettant de gérer le bground
const modalBtn = document.querySelectorAll(".modal-btn"); // constante permettant au clic sur le btn de faire apparaître le formulaire 
const formData = document.querySelectorAll(".formData"); //L'objet FormData permet de créer un ensemble de paires clef-valeur (très utilisé dans les formulaires)
const closeModalBtn = document.getElementsByClassName("close") //fermer le formulaire

//const confirmationCloseBtn = document.getElementById("btn-closed"); bouton "fermer"

/*CONCERNANT LES BOUTONS PRESENTS
1 : <button class="btn-signup modal-btn"> Je m'inscris </button> ---- bouton pour l'inscription
2 : <span class="close"></span> --- permet de fermer la modal ()
3 : <input class="btn-submit" type="submit" class="button" value="C'est parti"
id="btn-submit"/> --- bouton pour soumettre son formulaire et passer 
4 : <button id="btn-closed" class="btn-confirm modal-btn"> Fermer </button> ----- bouton permettant de revenir à la page d'accueil 
*/

// ---------- Faire apparaitre le formulaire en appuyant sur le bouton "je m'inscris" ---------
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// ---- Fermer le formulaire : Close Modal Form ---------
/* INFO PERSO 4 : 
pour réaliser cette fonction se baser sur l'exemple de celle qui 
permet de la faire appaitre : mettre un display none à la place de display block
*/

closeModalBtn[0].addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = 'none';
}

// ----------- Validation du formulaire d'inscription ------------

/* -------- TO DO : CE QUI NE FONCTIONNE PAS DANS LE FORMULAIRE ---------
- pas possible de valider les CGU (Pourquoi ?? reprendre la fonction validate())
- pas possible de seclectionner plusieurs villes (Pourquoi ?? reprendre la fonction validate())
*/


// ------ element correspondant au bouton --------
const formValid = document.getElementById("btn-submit");

// ------- element quand c'est OK ----------
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const eventParticipation = document.getElementById("quantity");
const eventCity = document.getElementById('.checkbox-input[name="location"]');
const cgu = document.getElementById("checkbox1");

// ------- element quand c'est une erreur ----------
const errorFirstName = document.getElementById("missfirst");
const errorLastName = document.getElementById("misslast");
const errorMail = document.getElementById("missemail");
const errorBirthDate = document.getElementById("missbirthdate");
const erroreventParticipation = document.getElementById("missquantity");
const errorEventCity = document.getElementById("misslocalisation");
const errorCgu = document.getElementById("misscheckbox1");
const numbersValue = [0-9];

const confirmationValidation = document.getElementById("confirm-modal");
const confirmationCloseBtn = document.getElementById("btn-closed"); 


function validate() {

  // liste des variables appelées dans la fonction 
  
    var firstNameChecked;
    var lastNameChecked;
    var mailChecked;
    var birthDateChecked;
    var eventParticipationChecked;
    var eventCityChecked;
    var cguChecked;


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

  //vérification des localisations --- A REPRENDRE 

  if (!eventCity.checked) {
    errorEventCity.innerText = "Veuillez choisir une ou plusieurs ville(s).";
    errorEventCity.style.color = 'red';
    errorEventCity.style.fontSize = '0.8rem';
    errorEventCity.style.marginTop = '10px'; 
    return false;
  } else {
    errorEventCity.style.display = 'none';
    eventCityChecked = true;
  };

  // vérification de la validation des conditions générales d'utilisation (CGU) --- A REPRENDRE

  if (!cgu.checked) {
    errorCgu.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
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
    Event.preventDefault();
  };
  
}

// ------- Faire apparaître le message de validation -----------------
// Utiliser le bouton : const formValid = document.getElementById("btn-submit");


// ------- Fermer le formulaire avec le message de validation ---------

document.getElementById("btn-closed").addEventListener("click", closeModal);