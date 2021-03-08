//track mouse position when you click on image, track position when you move
const state = {mousedown: false} // object assign with :

//acces object property wsdhjaf.sd

document.addEventListener("mousedown", clickEvent => {
  state.mousedown = true
})

document.addEventListener("mouseup", clickEvent => {
  state.mousedown = false
})


document.addEventListener("mousemove", followEvent => {
  console.log(followEvent.pageX)
  console.log(followEvent.pageY)

  const box = document.querySelector(".floatingimage")
  if(state.mousedown) {
    box.style.transform = `translateX(${followEvent.pageX}px) translateY(${followEvent.pageY}px)`
  }
})
