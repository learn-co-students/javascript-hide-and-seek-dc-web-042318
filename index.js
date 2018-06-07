function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  list.forEach(function (element) {
    element.innerHTML = parseInt(element.innerHTML) + n
  })
}

function deepestChild() {
  const div = document.getElementById('grand-node').querySelectorAll('div')
  for (let i = 0; i < div.length; i++) {
    while (i === div.length - 1) {
      return div[i]
    }
  }

}
