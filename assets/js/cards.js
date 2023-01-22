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
        createElement("div", { classNames: ["cardInitial"] }),
        createElement("img", {
          classNames: ["cardPhoto"],
          listeners: { error: handlerImageError, load: handlerImageLoad },
          attrs: {
            src: actor.profilePicture,
            alt: actor.firstName + " " + actor.lastName,
            hidden: true,
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

        createLinks(actor.contacts),
           // createA(actor.contacts)// second second option to create social icons
    )
  );
}
