const said = document.querySelector(`.said-bar`)
document.querySelector(`.close`).addEventListener(`click`, () => {
  said.classList.remove(`active`)
})
document.querySelector(`.more`).addEventListener(`click`, () => {
  said.classList.add(`active`)
})