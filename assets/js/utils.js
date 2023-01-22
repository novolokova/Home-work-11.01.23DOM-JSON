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

/**
 *
 * @param {event} event
 */
function addToListActor({ currentTarget }) {
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
 * @returns {Node}
 */
function createLinks(links) {
  const cardWrapperItems = createElement("div", {
    classNames: ["cardWrapperItems"],
  });
  const icon = links.map((link) => {
    const socialIcon = socialMap.get(new URL(link).host);
    return createElement(
      "div",
      { classNames: ["cardItem"] },
      createElement("a", {
        classNames: ["icon", socialIcon],
        attrs: { href: link, target: "_blanc" },
      })
    );
  });
  cardWrapperItems.append(...icon);
  return cardWrapperItems;
}
