

// sth spawn images below the pages
const startTime = new Date()

const spawn = ( ) => {


  const randomimgnumber =  Math.floor(Math.random() * 3) + 1
  const randomAnimationDuration = Math.floor(Math.random() * 7000) + 1000
  const randomxValue = Math.floor(Math.random() * 1000) - 500
  const randomWidth = (Math.random() * 0.4) + 0.1

  const src = `wanda/we${randomimgnumber}.jpg`
  var picture = document.createElement("img");
    picture.src = src
    picture.className = "flow"
    picture.style.transform = `translateX(${randomxValue}px) scale(${randomWidth},${randomWidth})`

    const currentTime = new Date()
    const timePassed = currentTime-startTime
    const delayString = `${timePassed}ms`

      picture.style["animation-duration"] = `${randomAnimationDuration}ms`
  document.querySelector(".artboard").appendChild(picture)




  setTimeout(() => {
    spawn()
  }, 500)

  setTimeout(() => {
    picture.parentNode.removeChild(picture);
  }, 8000)



}
spawn()











//given a path
// all start at bottom- css animation randomly x,y

// more coplicated: every tick random function update position

//function which checks if pic are off page -- delete




//picture.classList.add(".flow")
//var animation = document.createElement(".flow");
//picture.style.animationName = "flowing"
//picture.sytle.animaionDuration = 4s
//.classList.add(".flow");

//document.querySelector(".artboard").appendChild("flow");
//var animation = document.createElement(".flow");
  //animation.style.flow.animationName = "flowing";


  //picture.style.flow = document.getElementById(".flow");
  //var animation = document.createElement(".flow")
