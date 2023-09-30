{ // Spoller
  /* const ACTIVE_CSS = '_active';
const spollerElements = document.querySelectorAll('[data-spoller]');
const spoller = spollerInit(spollerElements);

document.addEventListener('click', clickDocument);
function clickDocument(event) {
  const isSpoller = event.target.closest('[data-spoller]');
  if (isSpoller) {
    for (const map of Object.values(spoller)) {
      let isTrigger = map.get(isSpoller);
      if (isTrigger) clickSpoller(isTrigger, ACTIVE_CSS);
    }
  }
}

function clickSpoller(elements, selector) {
  if (!elements.length) return;
  const isActive = elements[0].classList.contains(selector);
  // if (!isActive) removeAllSelector(elements, selector);
  for (const element of elements) {
    if (!isActive) {
      addSelector(element, selector);
    } else {
      removeSelector(element, selector);
    }
  }
}

function removeAllSelector(elements, selector) {
  for (const element of elements) {
    removeSelector(element, selector);
  }
}

function removeSelector(element, selector) {
  element.classList.remove(selector);
}

function addSelector(element, selector) {
  element.classList.add(selector);
}

function spollerInit(elements) {
  if (!elements || elements.length < 2) return null;
  const structure = {};
  for (const element of elements) {
    const properties = element.dataset.spoller.split(';');
    let group, type, link;
    for (const property of properties) {
      const [key, value] = property.split(':');
      if (!key || !value) continue;
      if (key == 'group') {
        group = value;
        continue;
      }
      if (key == 'trigger' || key == 'target') {
        type = key;
        link = value;
        continue;
      }
    }
    if (!group || !type || !link) continue;
    if (!(group in structure)) structure[group] = {};
    if (!(link in structure[group])) structure[group][link] = {};
    if (!(type in structure[group][link])) structure[group][link][type] = [];
    structure[group][link][type].push(element);
  }
  if (!Object.values(structure).length) return null;
  const result = {};
  for (const [groupName, groupData] of Object.entries(structure)) {
    const map = new Map();
    for (const items of Object.values(groupData)) {
      const allElements = [...items.trigger, ...items.target];
      for (const trigger of items.trigger) {
        map.set(trigger, allElements);
      }
    }
    result[groupName] = map;
  }
  console.log(result);
  return result;
} */}