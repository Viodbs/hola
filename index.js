const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


function effectuerRecherche() {
  // Récupérer la valeur de la recherche + methode Lower pour eviter les recherches sensibles à la casse
  var termeRecherche = document.getElementById('searchInput').value.toLowerCase();

  // On vérifie si le terme de recherche n'est pas vide sinon on fait une alerte
  if (termeRecherche.trim() === '') {
      alert("Veuillez entrer un terme de recherche !");
      return;
  }

  // Récupérer le conteneur des résultats
  var conteneurResultats = document.getElementById('searchResultsContainer');

  // On efface les résultats précédents
  conteneurResultats.innerHTML = '';

  // on crée une nouvelle liste pour les résultats
  var listeResultats = document.createElement('ul');

  // on récupère les éléments de texte dans le contenu spécifique de la page
  var elementsTexte = document.querySelectorAll('.texte1 li');

  //for each pour parcourir les éléments et ajouter à la liste les éléments correspondants à la recherche
  elementsTexte.forEach(function(element) {
      var texteElement = element.textContent;
      var texteElementMinuscules = texteElement.toLowerCase();
      if (texteElementMinuscules.includes(termeRecherche)) {
          // on créer un nouvel élément de liste avec le texte original
          var elementListe = document.createElement('li');
          elementListe.textContent = texteElement;

          // Ajouter l'élément de liste à la liste des résultats
          listeResultats.appendChild(elementListe);
      }
  });

  // Si la liste des résultats est vide, afficher un message
  if (listeResultats.childElementCount === 0) {
      var messageAucunResultat = document.createElement('p');
      messageAucunResultat.textContent = "Aucun résultat trouvé, n'hésite pas à participer à la bibliographie !";
      conteneurResultats.appendChild(messageAucunResultat);
  } else {
      // On ajoute la liste des résultats au conteneur des résultats
      conteneurResultats.appendChild(listeResultats);
  }
}

