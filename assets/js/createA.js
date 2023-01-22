"use strict";
// 
/**
 *
 * @param {[string]} contacts
 * @returns {Node}
 */
 function createA(contacts) {
    const elem = createElement("div", { classNames: ["cardWrapperItems"] });
    let elemA = [];
    contacts.forEach((element) => {
      checkSocial(element, "facebook")
        ? elemA.push(checkSocial(element, "facebook"))
        : null;
      checkSocial(element, "twitter")
        ? elemA.push(checkSocial(element, "twitter"))
        : null;
      checkSocial(element, "instagram")
        ? elemA.push(checkSocial(element, "instagram"))
        : null;
    });
    elem.append(...elemA);
    return elem;
  }

  /**
   *
   * @param {string} element
   * @param {string} socialName
   * @returns {Node}
   */
  function checkSocial(element, socialName) {
    let elemA;
    if (element.includes(socialName)) {
      elemA = createElement(
        "div",
        { classNames: ["cardItem"] },
        createElement(
          "a",
          {
            classNames: [socialName],
            attrs: { href: element, target: "_blank" },
          },
          createElement("img", {
            classNames: ["item"],
            attrs: {
              src: "./assets/images/icons-" + socialName + ".svg",
              alt: socialName,
            },
          })
        )
      );
    }
    return elemA;
  }