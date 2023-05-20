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

/// Je déclare mes variables selon mes ID.
// Je crée une variable avec un tableau vide pour stocker mes informations dedans.

// Ensuite, je crée une fonction "tacheAjouter" permettant de capturer la valeur saisie et de l'ajouter à mon tableau "taches".
// Les mises à jour réinitialisent le champ d'entrée, puis via la fonction "sauvegardeTaches", sauvegardent les tâches dans le stockage local.

// Je crée une deuxième fonction pour afficher mes tâches et parcourir le tableau "taches".
// J'utilise cette fonction pour créer l'élément "li" et le bouton "supprimer" correspondant à chaque tâche.
// J'ajoute des écouteurs d'événement aux boutons de suppression pour supprimer les tâches, mettre à jour l'affichage à l'écran et sauvegarder les tâches modifiées.

// La troisième fonction réinitialise le tableau, vide le contenu de la liste affichée et sauvegarde les tâches mises à jour.
// Cela permet de réinitialiser toutes les tâches et de remettre l'application à son état initial.

// La quatrième fonction convertit le tableau "taches" en une chaîne JSON et la stocke dans le stockage local du navigateur en utilisant la clé "taches".
// Cela permet de conserver les tâches même après la fermeture de la page.

// J'utilise "event.preventDefault" pour éviter le comportement par défaut du formulaire.

// La cinquième fonction permet de retransfomer les chaînes JSON stockées pour les réafficher à l'écran.

// Ensuite, j'ajoute les événements de clic.

// Enfin, j'utilise "window" pour recharger la fenêtre à l'aide de l'événement "load".







