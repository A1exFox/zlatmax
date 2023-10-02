import { action } from "./common";

const spollerElements = document.querySelectorAll('[data-spoller]');
export const spollers = initSpollers(spollerElements);

export function clickSpoller(spoller) {
  const links = spollers.link[spoller.link];
  if (!links || !links.length) return;
  const isActive = links[0].classList.contains('_active');
  if (isActive) {
    action.selector.remove(links, '_active');
  } else {
    const groups = spollers.group[spoller.group];
    action.selector.remove(groups, '_active');
    action.selector.add(links, '_active');
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
      group[object.group] = action.filterBy.dataset(spollers, 'spoller', `group:${object.group}`);
    }
    if (!link[object.link]) {
      link[object.link] = action.filterBy.dataset(spollers, 'spoller', `trigger:${object.link}`);
      link[object.link].push(...action.filterBy.dataset(spollers, 'spoller', `target:${object.link}`));
    }
  }
  return { map, group, link };
}
