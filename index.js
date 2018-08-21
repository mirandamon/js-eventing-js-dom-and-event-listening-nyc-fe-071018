const shoppingPage = document.querySelector('#main')
const paragraph = document.querySelector('p')

let divs = document.querySelectorAll('div')

function bubble(event) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

for (div of divs) {
  div.addEventListener('click', bubble)
}

shoppingPage.addEventListener('click', (event) => {
  console.log(event)
  alert("Hey you clicked me!")
})

paragraph.addEventListener('click', (event) => {
  paragraph.style.backgroundColor = 'yellow'
  alert("You clicked the p!!!")
})