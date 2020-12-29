

// sth spawn images below the pages
const spawn = ( ) => {
  const src = "wanda/we1.jpg"
  const src1 = "wanda/we2.jpg"
  var picture = document.createElement("img");
  var picture1 = document.createElement("img");
    picture.src = src
    picture1.src = src1
    picture.style.width = "30%"
    picture1.style.width = "20%"
  document.querySelector(".artboard").appendChild(picture)
  document.querySelector(".artboard").appendChild(picture1)

  document.querySelector('.flow').style["animation-duration"] = "8s"


}
spawn()



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

//given a path
// all start at bottom- css animation randomly x,y

// more coplicated: every tick random function update position

//function which checks if pic are off page -- delete
