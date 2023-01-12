"use strict";

/**
 *
 * @param {object} actor {name:string, photo:string, birthdate:string}
 * @returns {Node}
 */
function createCard(actor) {
  return createElement(
    "li",
    { classNames: ["cardWrapper"], listeners: { click: addToListActor } },
    createElement(
      "article",
      { classNames: ["cardContainer"] },
      createElement(
        "div",
        { classNames: ["cardPhotoWrapper"] },
        createElement("img", {
          classNames: ["cardPhoto"],
          attrs: {
            src: actor.profilePicture,
            alt: actor.firstName + " " + actor.lastName,
          },
        })
      ),
      createElement(
        "h2",
        { classNames: ["cardName"] },
        document.createTextNode(
          actor.firstName + " " + actor.lastName || "not a name"
        )
      ),
      createA(actor.contacts)
    )
  );
}
