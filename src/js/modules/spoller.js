import { action } from "./common";

function initSpollers(config) {
  const spollerElements = document.querySelectorAll(config.dataName.html);
  if (!spollerElements) return null;
  const spollers = getSpollers(spollerElements);
  if (!spollers) return null;
  return { spollers, clickSpoller }

  function getSpollers(spollers) {
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
    if (!map) return null;
    const group = {};
    const link = {};
    for (const object of map.values()) {
      if (!group[object.group]) {
        group[object.group] = action.filterBy.dataset(spollers, config.dataName.js, `group:${object.group}`);
      }
      if (!link[object.link]) {
        link[object.link] = action.filterBy.dataset(spollers, config.dataName.js, `trigger:${object.link}`);
        link[object.link].push(...action.filterBy.dataset(spollers, config.dataName.js, `target:${object.link}`));
      }
    }
    if (!group || !link) return null;
    return { map, group, link };
  }

  function clickSpoller(eventTarget) {
    const spoller = spollers.map.get(eventTarget.closest(config.dataName.html));
    if (!spoller) return;
    const links = spollers.link[spoller.link];
    if (!links || !links.length) return;
    const isActive = links[0].classList.contains(config.cssActive);
    if (isActive) {
      action.selector.remove(links, config.cssActive);
    } else {
      const groups = spollers.group[spoller.group];
      action.selector.remove(groups, config.cssActive);
      action.selector.add(links, config.cssActive);
    }
  }
}

export { initSpollers };