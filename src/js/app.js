import { clickSpoller, spollers } from "./modules/spoller";

document.addEventListener('click', clickDocument);

function clickDocument(event) {
  if (spollers) {
    const spoller = spollers.map.get(event.target.closest('[data-spoller]'));
    if (spoller) return clickSpoller(spoller);
  }
}
