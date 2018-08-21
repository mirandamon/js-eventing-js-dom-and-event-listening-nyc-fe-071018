const shoppingPage = document.querySelector('#main')
const paragraph = document.querySelector('p')

shoppingPage.addEventListener('click', (event) => {
  console.log(event)
  alert("Hey you clicked me!")
})

paragraph.addEventListener('click', (event) => {
  paragraph.style.backgroundColor = 'yellow'
  alert("You clicked the p!!!")
})