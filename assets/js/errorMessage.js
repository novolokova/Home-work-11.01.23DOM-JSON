"use strict";

/**
 *
 * @returns {Node}
 */
function errorMessage() {
  const container = document.getElementById("container");
  const errorMess = createElement("div", { classNames: ["errorMess"] });
  return container.append(errorMess);
}
