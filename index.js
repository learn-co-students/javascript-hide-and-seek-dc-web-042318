function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector('#nested .target')
}

function deepestChild() {
    let myDiv = document.querySelector('#grand-node div div div div')
   return myDiv;
}

function increaseRankBy(n) {
  let ul = document.querySelector('.ranked-list')
  for(var u=0; i< n; i++) {
    ul.appendChild(n);
    n++
  }
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll(".ranked-list");

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node = document.getElementById("grand-node");
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}