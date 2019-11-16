let items = [];
function select(selector) {
  let domNodes = document.body.children, selectorList = selector.split(' ');
  for (let i = 0; i < selectorList.length; i++) {
    items = [];
    domNodes = parseSelect(selectorList[i], domNodes);
  }
  return domNodes;
}

function parseSelect(selector, domNodes) {
  let curSelector = selector.slice(1, selector.length), prefix = selector.slice(0, 1), specificSelection = selector.match(/\#|\./);
  if (specificSelection && specificSelection.length > 0) {
    prefix = selector[specificSelection.index];
    curSelector = selector.slice((specificSelection.index + 1), selector.length);
  }
  for (let i = 0; i < domNodes.length; i++) {
    let ele = domNodes[i];
    if (prefix === "#" && ele.id === curSelector) {
      items.push(ele);
      break;
    } else if ((prefix === "." && ele.classList.contains(curSelector)) || (ele.tagName == selector.toUpperCase())) {
      items.push(ele);
    }
    if (ele.children.length > 0)
      parseSelect(selector, ele.children)
  }
  return items;
}

module.exports = select;
