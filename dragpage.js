//track mouse position when you click on image, track position when you move
const state = {mousedown: false, x:0, y:0, imageX:0, imageY:0, target:null} // object assign with :

//acces object property wsdhjaf.sd

document.querySelector(".floatingimage").addEventListener("mousedown", clickEvent => {
  state.mousedown = true
  state.x = clickEvent.pageX
  state.y = clickEvent.pageY
  state.target = clickEvent.target
})

document.addEventListener("mouseup", clickEvent => {
  state.mousedown = false
  const currentMouseX = clickEvent.pageX
  const currentMouseY = clickEvent.pageY
  const deltaX = currentMouseX - state.x
  const deltaY = currentMouseY - state.y
  state.imageX = state.imageX + deltaX
  state.imageY = state.imageY + deltaY
})

document.addEventListener("mousemove", followEvent => {
  const currentMouseX = followEvent.pageX
  const currentMouseY = followEvent.pageY
  const deltaX = currentMouseX - state.x
  const deltaY = currentMouseY - state.y
  console.log(state.x, currentMouseX, deltaX)

  //const box = document.querySelector(".floatingimage")

  if(state.mousedown) {
    state.target.style.transform = `translateX(${state.imageX + deltaX}px) translateY(${state.imageY + deltaY}px)`
  }
})

  // only mousedown over image it works - conditional in mousedown event , clickevent what i am cliking on (search mousedown event)
  // make it relative to where the mousedown started, renmber where mouse is when miusedown, whenever it moves, see delta, offset the image this amount

// diffrent imagex and Y for every image, nest things in my state
//use event.taget to create diffrent names, or nest
state[event.target.className] = {x: event.target.pageX}





  //document.box.addEventListener("mousedown", clickEvent =>  {
    //down = true
  //})box.mouseup("mouseup", clickEvent =>  {
    //down = false
  //})

  //const boxChecked =
  //if (boxChecked === true){
    //}
