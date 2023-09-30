import { clickSpoller, DATA_SPOLLER } from "./modules/spoller";

document.addEventListener('click', clickDocument);

function clickDocument(event) {
  const spoller = event.target.closest(DATA_SPOLLER);
  if (spoller) {
    clickSpoller(spoller);
    return;
  }
}