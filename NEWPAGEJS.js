

// sth spawn images below the pages
const startTime = new Date()

const spawn = ( ) => {


  const randomimgnumber =  Math.floor(Math.random() * 3) + 1
  const randomAnimationNumber =  Math.floor(Math.random() * 3) + 1
  const randomAnimationDuration = Math.floor(Math.random() * 5000) + 18000
  const randomxValue = Math.floor(Math.random() * 900) - 500
  const randomWidth = (Math.random() * 0.1) + 0.2
  //const randomyValue = Math.floor(Math.random() * 900) - 500
  //const randompath = (x, y, 10 * Math.random(), 0, Math.PI * Math.random());)

  const src = `wanda/we${randomimgnumber}.jpg`
  const randomAnimation = `flowing${randomAnimationNumber}`
  var picture = document.createElement("img");
    picture.src = src
    picture.className = "flow"
    picture.style.transform = `translateX(${randomxValue}px) scale(${randomWidth},${randomWidth})`



//normal way of eventlisterner
//document.querySelector(".artboard").addEventListener("mouseover", (event) => {
    //event.target.style.zIndex = 10
  //})

    picture.addEventListener("mouseover", () => {
      picture.style.zIndex = 10
    })
    picture.addEventListener("mouseout", () => {
      picture.style.zIndex = 1
    })


      picture.style["animation-name"] = randomAnimation
      picture.style["animation-duration"] = `${randomAnimationDuration}ms`
  document.querySelector(".artboard").appendChild(picture)




  setTimeout(() => {
    spawn()
  }, 1500)

  setTimeout(() => {
    picture.parentNode.removeChild(picture);
  }, randomAnimationDuration)

}
spawn()


// how to once hover in y comes to front,
//diffrent path
//picture.style.hover = "z-index", "10"







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
