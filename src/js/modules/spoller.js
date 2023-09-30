export const DATA_SPOLLER = '[data-spoller]';
const CSS_ACTIVE = '_active';

const spollers = document.querySelectorAll(DATA_SPOLLER);

export function clickSpoller(spoller) {
  const data = spoller.dataset.spoller;
  if (!data) return;
  const keys = ['group', 'trigger', 'target'];
  const property = getPropertyObj(data, keys);
  if (!property.trigger || !property.group) return;
  const group = filterArr(`group:${property.group}`, spollers);
  const triggers = filterArr(`trigger:${property.trigger}`, group);
  const targets = filterArr(`target:${property.trigger}`, group);
  changeCssState(group, [...triggers, ...targets], CSS_ACTIVE);
}

function filterArr(property, elements) {
  const filteredObj = [];
  for (const element of elements) {
    const isValid = element.dataset.spoller.includes(property);
    if (!isValid) continue;
    filteredObj.push(element);
  }
  return filteredObj;
}

function changeCssState(group, elements, selector) {
  const isActive = elements[0].classList.contains(selector);
  if (!isActive) removeAllSelector(group, selector);
  for (const element of elements) {
    if (isActive) removeSelector(element, selector);
    else addSelector(element, selector);
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

function getPropertyObj(string, keys) {
  const result = {};
  const properties = string.split(';');
  for (const property of properties) {
    const [key, value] = property.split(':');
    if (!key || !value || !keys.includes(key)) continue;
    result[key] = value;
  }
  return result;
}