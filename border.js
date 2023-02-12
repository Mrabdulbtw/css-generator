
document.addEventListener(`DOMContentLoaded`, () => {
  const withe = document.getElementById(`withe`)
  const withePx = withe.previousElementSibling.previousElementSibling
  const radius = document.getElementById(`radius`)
  const rediusPx = radius.previousElementSibling.previousElementSibling
  const code = document.querySelector(`#code`)
  const preview = document.querySelector(`.preview`)
  const color = document.getElementById(`color`)




  let text;
  let withValue;
  let styles = `solid`;
  let colors = `#000000`;
  let radiuss = 1;


  function borderwithe() {
    radiuss = radius.value
    rediusPx.innerHTML = `${radiuss}px`

    withValue = `${withe.value}`
    withePx.innerHTML = `${withValue}px`
    text = `border: ${withValue}px ${styles} ${colors};
border-radius:${radiuss}px;`
    code.value = text
    preview.style.cssText = text
  }





  borderwithe()

  function colorchange(event) {
    colors = color.value;
    borderwithe()

  }

  //copy Event
  function copy() {

    document.querySelector(`textarea`).select()
    document.execCommand(`copy`)

  }




  function selecting() {
    textel.innerHTML = this.textContent
    styles = this.textContent
    borderwithe()

  }



  document.querySelector(`.copy`).addEventListener(`click`, copy)


  //withe
  withe.addEventListener(`mousemove`, borderwithe)
  withe.addEventListener(`change`, borderwithe)

  //style

  //color
  color.addEventListener(`change`, colorchange)
  color.addEventListener(`mousemove`, colorchange)

  //radius
  radius.addEventListener(`mousemove`, borderwithe)
  radius.addEventListener(`change`, borderwithe)

  const textel = document.querySelector(`.text`)
  const li = document.querySelectorAll(`li`)
  li.forEach((option) => {
    option.addEventListener(`click`, selecting)
  })


})



//saide bar

const said = document.querySelector(`.said-bar`)
document.querySelector(`.close`).addEventListener(`click`, () => {
  said.classList.remove(`active`)
})
document.querySelector(`.more`).addEventListener(`click`, () => {
  said.classList.add(`active`)
})





const groupsEl = document.querySelector(`.groups`)
console.log(groupsEl);
const arrowEl = document.querySelector(`.arrow`)
const options = document.querySelector(`.options`)

groupsEl.addEventListener(`click`, () => {


  options.classList.toggle(`actived`)
  arrowEl.classList.toggle(`ractive`)

})




