

// sth spawn images below the pages
const spawn = ( ) => {
  const src = "wanda/we1.jpg"
  var picture = document.createElement("img");
  picture.src = src
    picture.style.width = "30%"
  document.querySelector(".artboard").appendChild(picture);

}
spawn()


//given a path
// all start at bottom- css animation randomly x,y

// more coplicated: every tick random function update position

//function which checks if pic are off page -- delete
