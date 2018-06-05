function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.getElementById('nested')
}

function deepestChild() {
    let node = document.querySelector('#grand-node')
    while (node.children[0]) {
        node = node.children[0]
        console.log(node)
    }
    return node
}

function increaseRankBy(n) {
    const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    lis.forEach(function (element) {
        element.innerHTML = parseInt(element.innerHTML) + n
    })
}
  