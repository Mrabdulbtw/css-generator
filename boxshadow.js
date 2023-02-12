const said = document.querySelector(`.said-bar`)
document.querySelector(`.close`).addEventListener(`click`, () => {
    said.classList.remove(`active`)
})
document.querySelector(`.more`).addEventListener(`click`, () => {
    said.classList.add(`active`)
})



document.addEventListener(`DOMContentLoaded`, () => {
    //code
    const code = document.querySelector(`#code`)


    //hvalue
    const hvalue = document.querySelector(`#Horizontal`)
    const hpxvalue = hvalue.previousElementSibling
    hvalue.addEventListener(`change`, updatevalue)
    hvalue.addEventListener(`mousemove`, updatevalue)
    //vvalue
    const vvalue = document.querySelector(`#vertical`)
    const vpxvalue = vvalue.previousElementSibling
    vvalue.addEventListener(`change`, updatevalue)
    vvalue.addEventListener(`mousemove`, updatevalue)


    //blur
    const blurvalue = document.querySelector(`#blur`)
    const blurpxvalue = blurvalue.previousElementSibling
    blurvalue.addEventListener(`change`, updatevalue)
    blurvalue.addEventListener(`mousemove`, updatevalue)
    //spread
    const spreadvalue = document.querySelector(`#spread`)
    const spreadpxvalue = spreadvalue.previousElementSibling
    spreadvalue.addEventListener(`change`, updatevalue)
    spreadvalue.addEventListener(`mousemove`, updatevalue)

  //color 

  const color=document.querySelector(`#color`)
color.addEventListener(`change`, updatevalue)
color.addEventListener(`mousemove`, updatevalue)

   
      const shadowbox =document.querySelector(`.shadow-box`)
   


    let hrvalue = 10;
    let vrvalue = 5;
    let blurrvalue = 10;
    let speardxvalue = 10

    function updatevalue() {
           colorvalue=   color.value
           
          
        hrvalue = hvalue.value
        hpxvalue.innerHTML = `${hrvalue}px`

        vrvalue = vvalue.value
        vpxvalue.innerHTML = `${vrvalue}px`

        blurrvalue = blurvalue.value
        blurpxvalue.innerHTML = `${blurrvalue}px`

        speardxvalue = spreadvalue.value
        spreadpxvalue.innerHTML = `${speardxvalue}px`
        const fullvalue = `box-shadow: ${hrvalue}px ${vrvalue}px ${blurrvalue}px ${speardxvalue}px ${colorvalue}`
        code.value = fullvalue
        shadowbox.style.cssText=fullvalue
    }

    updatevalue()


})

//copy event
document.querySelector(`.copy`).addEventListener(`click`,()=>{
    document.querySelector(`#code`).select()
    document.execCommand(`copy`)
})








