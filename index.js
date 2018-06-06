function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  const list = document.querySelector("#grand-node")
  const htmlcollection = list.getElementsByTagName('div')
  for (let i = 0; i < htmlcollection.length; i++) {
   while (i === htmlcollection.length - 1) {
     return  htmlcollection[i]
   }
  }
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
