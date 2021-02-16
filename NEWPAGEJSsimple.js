let secondsPassed;
let oldTimeStamp;
let fps;
let boxposition = {x: 0, y: 0}
let scale = [2, 0.1, 0.5, 3, 0.2]
let scale2 = {value: 0.3}




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
      const scaleoffset = (Math.random() * 0.2) -0.1
      const numberscale = Math.floor(scale.length * Math.random())
      const newScale = scale[numberscale]

      boxposition.x = boxposition.x+0.1
      boxposition.y = boxposition.y+0.1


      scale2.value = scale2.value+scaleoffset





      let randomColor = Math.random() > 0.5? '#ff8081' : '#0099b0'
      box.style.backgroundColor = "randomColor"
      //box.fill(100, 50, 200, 175)

      box.style.transform = `translateX(${boxposition.x}px) translateY(${boxposition.y}px) scale(${newScale})`

    }
