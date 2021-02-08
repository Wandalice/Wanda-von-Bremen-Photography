let secondsPassed;
let oldTimeStamp;
let fps;
let boxposition = {x: 0, y: 0}

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
      boxposition.x = boxposition.x+0.1
      boxposition.y = boxposition.y+0.1
      box.style.transform = `translateX(${boxposition.x}px) translateY(${boxposition.y}px)`
    }
