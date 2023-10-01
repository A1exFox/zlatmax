const spollerElements = document.querySelectorAll('[data-spoller]');
export const spollers = initSpollers(spollerElements);

export function clickSpoller(spoller) {
  const links = spollers.link[spoller.link];
  if (!links || !links.length) return;
  const isActive = links[0].classList.contains('_active');
  if (isActive) {
    removeSelector(links, '_active');
  } else {
    const groups = spollers.group[spoller.group];
    removeSelector(groups, '_active');
    addSelector(links, '_active');
  }
}
function removeSelector(array, selector) {
  for (const element of array) {
    element.classList.remove(selector);
  }
}
function addSelector(array, selector) {
  for (const element of array) {
    element.classList.add(selector);
  }
}
function initSpollers(spollers) {
  if (!spollers) return null;
  const map = new Map();
  for (const spoller of spollers) {
    const data = spoller.dataset.spoller;
    if (!data) continue;
    if (!data.includes('trigger:') || !data.includes('group:')) continue;
    const [group, link] = data.split(';');
    if (!group || !link) continue;
    const groupName = group.split(':')[1];
    const linkValue = link.split(':')[1];
    if (!groupName || !linkValue) continue;
    const structure = {
      group: groupName,
      link: linkValue,
    };
    map.set(spoller, structure);
  }
  const group = {};
  const link = {};
  for (const object of map.values()) {
    if (!group[object.group]) {
      group[object.group] = filterByData(spollers, 'spoller', `group:${object.group}`);
    }
    if (!link[object.link]) {
      link[object.link] = filterByData(spollers, 'spoller', `trigger:${object.link}`);
      link[object.link].push(...filterByData(spollers, 'spoller', `target:${object.link}`));
    }
  }
  return { map, group, link };
}
function filterByData(collection, dataName, request) {
  const result = [];
  for (const element of collection) {
    const data = element.dataset[dataName];
    if (!data || !data.includes(request)) continue;
    result.push(element);
  }
  return result;
}