import { initSpollers } from "./modules/spoller";
import { config } from "./modules/common";

const spollers = initSpollers(config.spoller);

document.addEventListener('click', clickDocument);

function clickDocument(event) {
  if (spollers) spollers.clickSpoller(event.target);
}
