"use strict";

/**
 *
 * @param {string} tag
 * @param {object} options { classNames[], listeners{}, attrs{}, styles{}}
 * @param  {...Node | string} children
 * @returns {Node}
 */
function createElement(
  tag = "div",
  { classNames, listeners, attrs, styles, options } = {},
  ...children
) {
  const elem = document.createElement(tag);
  if (classNames) {
    elem.classList.add(...classNames);
  }
  if (listeners) {
    for (const [typeEvent, handler] of Object.entries(listeners)) {
      elem.addEventListener(typeEvent, handler);
    }
  }
  if (attrs) {
    for (const [typeAttr, valueAttr] of Object.entries(attrs)) {
      elem.setAttribute(typeAttr, valueAttr);
    }
  }
  if (styles) {
    for (const [nameStyle, valueStyle] of Object.entries(styles)) {
      elem.style[nameStyle] = valueStyle;
    }
  }
  if (options) {
  }
  elem.append(...children);
  return elem;
}

// /**
//  *
//  * @param {[string]} contacts
//  * @returns {Node}
//  */
// function createA(contacts) {
//   const elem = createElement("div", { classNames: ["cardWrapperItems"] });
//   let elemA = [];
//   contacts.forEach((element) => {
//     checkSocial(element, "facebook")
//       ? elemA.push(checkSocial(element, "facebook"))
//       : null;
//     checkSocial(element, "twitter")
//       ? elemA.push(checkSocial(element, "twitter"))
//       : null;
//     checkSocial(element, "instagram")
//       ? elemA.push(checkSocial(element, "instagram"))
//       : null;
//   });
//   elem.append(...elemA);
//   return elem;
// }
// /**
//  *
//  * @param {string} element
//  * @param {string} socialName
//  * @returns {Node}
//  */
// function checkSocial(element, socialName) {
//   let elemA;
//   if (element.includes(socialName)) {
//     elemA = createElement(
//       "div",
//       { classNames: ["cardItem"] },
//       createElement(
//         "a",
//         {
//           classNames: [socialName],
//           attrs: { href: element, target: "_blank" },
//         },
//         createElement("img", {
//           classNames: ["item"],
//           attrs: {
//             src: "./assets/images/icons-" + socialName + ".svg",
//             alt: socialName,
//           },
//         })
//       )
//     );
//   }
//   return elemA;
// }


/**
 *
 * @param {event} event
 */
 function addToListActor({currentTarget}) {
  const actorName = currentTarget.innerText;
   const ulContainer = document.getElementById("list-actors");
  currentTarget.removeEventListener("click", addToListActor, false);
  const li = createElement("li");
  ulContainer.append(li);
  li.innerText = actorName;
}

function handlerImageError({ target }) {
  target.remove();
}
function handlerImageLoad({ target }) {
  target.hidden = false;

}

/**
 * 
 * @param {string} links 
 * @returns 
 */
function createLinks(links) {
  const cardWrapperItems = createElement(
    "div",
    { classNames: ["cardWrapperItems"] });  
   const icon = links.map((link) => {
    const socialIcon = socialMap.get(new URL(link).host);
    return createElement(
      "div",
      { classNames: ["cardItem"] },
    createElement("a", {
      classNames: ["icon", socialIcon],
      attrs: { href: link, target: "_blanc" },
    }));
  });
  cardWrapperItems.append(...icon);
return cardWrapperItems;

}