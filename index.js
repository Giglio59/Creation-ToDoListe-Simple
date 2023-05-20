// Déclaration des variables
let input = document.getElementById("TextEntre");
let bouton = document.getElementById("BoutonValide");
let boutonSupp = document.getElementById("BoutonSuprimer");
let liste = document.getElementById("Liste");
let taches = [];

// Fonction pour ajouter une tâche
function TacheAjouter(event) {
  event.preventDefault();
  let valeur = input.value;
  if (valeur !== "") {
    taches.push(valeur);
    afficherTache();
    input.value = "";
    sauvegarderTaches(); // Sauvegarder les tâches dans le stockage local
  }
}

// Fonction pour afficher les tâches
function afficherTache() {
  liste.innerHTML = "";
  taches.forEach(function(tache) {
    let creation = document.createElement("li");
    creation.innerHTML = tache;

    // Création du bouton supprimer
    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.innerHTML = "Supprimer";
    boutonSupprimer.addEventListener("click", function() {
      let index = taches.indexOf(tache);
      if (index !== -1) {
        taches.splice(index, 1);
        afficherTache();
        sauvegarderTaches(); // Sauvegarder les tâches dans le stockage local
      }
    });
    creation.appendChild(boutonSupprimer);
    liste.appendChild(creation);
  });
}

function supprimerTache(event) {
  event.preventDefault();
  taches = [];
  liste.innerHTML = "";
  sauvegarderTaches(); // Sauvegarder les tâches dans le stockage local
}

// Sauvegarder les tâches dans le stockage local
function sauvegarderTaches() {
  localStorage.setItem("taches", JSON.stringify(taches));
}

// Charger les tâches depuis le stockage local
function chargerTaches() {
  let tachesEnregistrees = localStorage.getItem("taches");
  if (tachesEnregistrees) {
    taches = JSON.parse(tachesEnregistrees);
    afficherTache();
  }
}

// Création des écouteurs d'événements
bouton.addEventListener("click", TacheAjouter);
boutonSupp.addEventListener("click", supprimerTache);

// Charger les tâches si elles existent déjà
window.addEventListener("load", chargerTaches);

// Explication des tache //

// Je déclare mais variable selon mais ID //
// je créé une variable avec un tableau vide pour stoker mes information dedans // 

// Ensuite je créé une fonction tacheajouter permettant de capturais la valeur saisie de l'ajouter a mon tableau taches  
// les mais a jour reinisialise le champd d'netréé et ensuis via la fonction sauvegardeTaches les sauvgarde dans le local stocage//

// je créé une deuxiemme fonction pour afficher mes tache  et parcouri les tableau tache et créé l'lement li et le bouton supprimer 
// la suivant avec les ecouteur d'évenement de celui ci pour supprimer les tache mais a jour l'affichage de l'écran et sauvgarde les tache mise //

// la 3 emme fonction reinitialise le tableau vide le contenuede liste afficher et sauvegarde les tache mise ajour cea permmer de renitialiser tout les 
// tache et de remettre l'application a son etat vide //

// La 4 eme fonction convertit le tableau taches en une chaîne JSON et le stocke dans le stockage local du navigateur en utilisant la clé "taches"
// pour que les tache saison reste meme apres fermeture de la page //

// j'utilise event.preventDefault pour elever le par deffaut du from //

//La 5 eme fonction permet de retransfomer les chaine Jeson stoquer de les re afficher a l'écran  //

// ensuite les evenment de click // 

// et le window pour recharger la fenertre a l'aide de l'evement load//






