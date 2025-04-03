function ajouteTache() {
    // Je recupere la value et je mets un petit espace apres pour faire joli
    let input = document.getElementById("input").value + " ";
    // Pas forcement besoin d'expliquer les deux lignes en dessous je pense
    let liste = document.getElementById("liste1");
    let li = document.createElement("li");

    // La je crée le bouton pour dire j'ai fini tout ce que j'avais à faire
    let boutonFini = document.createElement("button");
    // Pour le texte dans mon bouton
    boutonFini.innerHTML = "Terminé";
    // Pour activer la function précise
    boutonFini.onclick = tacheFinie;
    // Lui rajouter une classe pour le personaliser ou quoi c un peu gimmick certes
    boutonFini.className = "move";
    // Je mets en string l'input que l'user a utilisé que j'ai récup grace au .value en haut là
    li.appendChild(document.createTextNode(input));
    // j'appenChild mon bouton a mon li
    li.appendChild(boutonFini);
    // j'appendChild mon li a ma liste
    liste.appendChild(li);

    // Pareil que au dessus
    let boutonSuppr = document.createElement("button");
    boutonSuppr.innerHTML = "Supprimer";
    boutonSuppr.onclick = supprTache;
    boutonSuppr.className = "suppr";
    li.appendChild(boutonSuppr);
    liste.appendChild(li);
    // console.log(boutonSuppr)
}
  
  function tacheFinie(evt) {
    // J'ai besoin du target pour pouvoir supprimer mon bouton apres globalement genre
    let btn = evt.target;
    // Je recup le li dans lequel mon bouton evt est, il y'a un btn par li 
    let li = btn.closest("li");
    // j'enleve mon bouton vu que la tache est terminée
    btn.remove();
    // Je transfere la tache/li dans la colonne "finie"
    document.getElementById("liste2").appendChild(li);
}

function supprTache(evt2) {
    // Pareil que au dessus
    let supprbtn = evt2.target;
    // Pareil que au dessus mais la je veux pas le bouger mais le supprimer de notre plan astral
    let li = supprbtn.closest("li");
    // Je supprime la tache et le bouton en gros comme au dessus
    li.remove()
    supprbtn.remove()
}
