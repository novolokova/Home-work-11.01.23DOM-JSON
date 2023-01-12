"use strict";


fetch("./assets/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    const cardsContainer = document.getElementById("cardsContainer");
    const actorCardsHTML = data
      .filter((actor) => actor.id)
      .map((actor) => createCard(actor));
    console.log(cardsContainer);
    cardsContainer.append(...actorCardsHTML);
  })
  .catch((error) => {
    console.log(error);
  });












