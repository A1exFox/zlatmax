const config = {
  spoller: {
    cssActive: '_active',
    datasetName: {
      html: '[data-spoller]',
      js: 'spoller',
    }
  }
}
const action = {
  selector: {
    add(elements, selector) {
      if (!selector) return;
      action.loop(elements, elem => elem.classList.add(selector));
    },
    remove(elements, selector) {
      if (!selector) return;
      action.loop(elements, elem => elem.classList.remove(selector));
    }
  },
  filterBy: {
    dataset(collection, datasetName, substring) {
      const result = []
      if (!datasetName || !substring) return result;
      action.loop(collection, element => {
        const data = element.dataset[datasetName];
        if (!data || !data.includes(substring)) return;
        result.push(element);
      });
      return result;
    }
  },
  loop(elements, callback) {
    if (!elements || !elements.length || !callback) return;
    for (const element of elements) callback(element);
  },
}
export { action, config };