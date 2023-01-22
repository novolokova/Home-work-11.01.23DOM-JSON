"use strict";

fetch("./assets/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    const cardsContainer = document.getElementById("cardsContainer");
    const actorCardsHTML = data
      .filter((actor) => actor.id && (actor.firstName || actor.lastName))
      .map((actor) => createCard(actor));
    cardsContainer.append(...actorCardsHTML);
  })
  .catch((error) => {

    console.log(error);
  });
