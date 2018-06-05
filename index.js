function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target');
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}

function increaseRankBy(n) {
  document.querySelectorAll('ul.ranked-list li').forEach(li => (li.innerHTML = parseInt(li.innerHTML) + n))
}
