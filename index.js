
// Déclaration des variable//
let input = document.getElementById("TextEntre");
let bouton = document.getElementById("BoutonValide");
let liste = document.getElementById("Liste");

// fonction de la tache a ajouté //

function TacheAjouter (event){
    event.preventDefault();
    let valeur = input.value ;
    if ( valeur !== ""){
    let creation = document.createElement("li");
    creation.innerHTML = valeur ;
    liste.appendChild(creation);
    input.value = ""
    }
}
// creation d'écouteur d'evenment //

bouton.addEventListener("click",TacheAjouter);


// Explication des tache //
// Je déclare mais variable selon mais ID //
// Ensuite je créé une fonction pour exectuter mon programe //
// j'utilise event.preventDefault pour elever le par deffaut du from //
// je créé une variable pour y mettre la valeur ajouter //
// Je crée une condition quo dit que si ma valeur ajouter n'est egaal a rien //
//Alors je créé une variable ou j'y ajoute la reation du baise li//
// J'ajoute ce li dans l'objet document qui et egale a la valeur ajouter //
// Ensuite j'exectute l'odre d'apprendre cette nouvelle donné//
// Ensuite je je initialise le input //
// Et je crée mon ecouteur d'evenment click par rapport a ma fonction //




