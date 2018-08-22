const shoppingPage = document.querySelector('#main')
const paragraph = document.querySelector('p')
const input = document.querySelector('input')

let divs = document.querySelectorAll('div')

let whatTheyveTypedSoFar = ''

input.addEventListener('keydown', (event) => {
  const nums = []
  if (whatTheyveTypedSoFar.length === 0 && event.which === 71) {
    event.preventDefault()
  }
  //console.log(event)
})

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