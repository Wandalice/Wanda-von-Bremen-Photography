
//randdomly sign a background image to box1,box2 - first thing on the pages
// box start from below - move up (translate stuff,) negative number

// create new boxes in every draw cicle - if 10 s pass, create new box, add to array, stored in
// add to array

let secondsPassed;
let oldTimeStamp;
let fps;
let boxposition = {x: 0, y: 0}
let box2position = {x: 0, y: 0}
let scale = [2, 0.1, 0.5, 7, 0.2]
let scale2 = {value: 0.3}
let box2scale2 = {value: 0.9}
let color = ['red', 'green', 'pink', 'black', 'blue', 'orange']





//function randomWidth(items){
//return items[Math.floor(Math.random() * items.length)]}
  //var items = [245, 2, 3, 4, 9]


  //var items =[ 0.01, 3, 0.02, 1]

  //items.forEach((number) => {})

    window.onload = init;

    function init(){


        // Start the first frame request
        window.requestAnimationFrame(gameLoop);
    }

    function gameLoop(timeStamp) {

        const deltatime = timeStamp - oldTimeStamp
        // Calculate the number of seconds passed since the last frame
        secondsPassed = (deltatime) / 1000;
        oldTimeStamp = timeStamp;

        // Calculate fps
        fps = Math.round(1 / secondsPassed);


        // Perform the drawing operation
        draw(deltatime);

        // The loop function has reached it's end. Keep requesting new frames
        window.requestAnimationFrame(gameLoop);
    }


    function draw(deltatime){




      const box = document.querySelector(".boxx")
      const box2 = document.querySelector(".boxx2")
      //const scaleoffset = (Math.random() * 0.2) -0.1
      const numberscale = Math.floor(scale.length * Math.random())
      const newScale = scale[numberscale]
      const numberscale2 = Math.floor(scale.length * Math.random())
      const newScale2 = scale[numberscale2]

      //const colorarea = Math.floor(color.length * Math.random())
      //const newcolor = color[colorarea]
      const randomr = Math.floor(Math.random() * 255)
      const randomg = Math.floor(Math.random() * 255)
      const randomb = Math.floor(Math.random() * 255)
      const randomO = Math.random()

      const random2r = Math.floor(Math.random() * 255)
      const random2g = Math.floor(Math.random() * 255)
      const random2b = Math.floor(Math.random() * 255)
      const random2O = Math.random()

      boxposition.x = boxposition.x+(Math.random() * 0.2)
      boxposition.y = boxposition.y+(Math.random() * 0.1)

      box2position.x = box2position.x+(Math.random() * 1)
      box2position.y = box2position.y+(Math.random() * 2)


      //scale2.value = scale2.value+scaleoffset





      //let randomColor = Math.random() > 0.5? '#ff8081' : '#0099b0'
      //box.style.backgroundColor = "randomColor"
      //box.fill(100, 50, 200, 175)

      box.style.transform = `translateX(${boxposition.x}px) translateY(${boxposition.y}px) scale(${newScale})`
      box.style.backgroundColor = `rgba(${randomr},${randomg},${randomb},${randomO})`

      box2.style.transform = `translateX(${box2position.x}px) translateY(${box2position.y}px) scale(${newScale2})`
      box2.style.backgroundColor = `rgba(${random2r},${random2g},${random2b},${random2O})`
      console.log(`translateX(${box2position.x}px) translateY(${box2position.y}px) scale(${newScale2})`)

    }
