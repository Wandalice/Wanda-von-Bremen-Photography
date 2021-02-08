

// sth spawn images below the pages
const startTime = new Date()

const textstrings = [["Click on the pictures to see them bigger...","small-title"],
 ["This a very long text to see how things go", "big-title"],
  ["another text","medium-title"]]


const spawn = ( ) => {


  const randomimgnumber =  Math.floor(Math.random() * 35) + 1
  const randomAnimationNumber =  Math.floor(Math.random() * 4) + 1
  const randomtextAnimationNumber =  Math.floor(Math.random() * 5) + 3
  const randomAnimationDuration = Math.floor(Math.random() * 5000) + 18000
  const randomtextAnimationDuration = Math.floor(Math.random() * 4000) + 16000
  const randomxValue = Math.floor(Math.random() * 900) - 500
  const randomWidth = (Math.random() * 0.1) + 0.3


  const src = `book/canvas${randomimgnumber}.jpg`
  const randomAnimation = `flowing${randomAnimationNumber}`
    const randomtextAnimation = `flowing${randomtextAnimationNumber}`
  var picture = document.createElement("img");
    picture.src = src
    picture.className = "flow"
    picture.style.transform = `translateX(${randomxValue}px) scale(${randomWidth},${randomWidth})`

    var text = document.createElement("p")
    const title = textstrings[ Math.floor(Math.random() * 3) ]
    const textstring = title[0]
    const textclass = title[1]
      text.innerHTML = textstring
      text.className = "flow flowtext"+" "+textclass









//normal way of eventlisterner
//document.querySelector(".artboard").addEventListener("mouseover", (event) => {
    //event.target.style.zIndex = 10
  //})

    picture.addEventListener("mouseover", () => {
      picture.style.zIndex = "10"
      //picture.style["animation-duration"] = "4000ms"
    })
    picture.addEventListener("mouseout", () => {
      picture.style.zIndex = "1"
      //picture.style["animation-duration"] = `${randomAnimationDuration}ms`
    })

    picture.addEventListener("click", () => {
      if(picture.big) {
        picture.style.transform = `translateX(${randomxValue}px) scale(${randomWidth},${randomWidth})`
        picture.big = false
      } else {
          picture.style.transform = `translateX(${randomxValue}px) scale(0.6, 0.6)`
          picture.big = true
      }

    })

      picture.style["animation-name"] = randomAnimation
      picture.style["animation-duration"] = `${randomAnimationDuration}ms`
      text.style["animation-name"] = randomtextAnimation
      text.style["animation-duration"] = `${randomtextAnimationDuration}ms`
  document.querySelector(".artboard").appendChild(picture)
  document.querySelector(".artboard").appendChild(text)



//

  //document.querySelector(".artboard").addEventListener("mouseover", (event) => {
  //event.target.style["animation-duration"] = 4000
  //})
  //document.querySelector(".artboard").addEventListener("mouseout", (event) => {
    //event.target.style["animation-duration"] = `${randomAnimationDuration}ms`
    //})


    //documnet.queryselector(".artboard").addEventListener("click", (event) => {
      //event.target.style.transform = 0.5
    //})




  setTimeout(() => {
    spawn()
  }, 2500)

  setTimeout(() => {
    picture.parentNode.removeChild(picture);
    text.parentNode.removeChild(text);
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
