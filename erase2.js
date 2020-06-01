var url = './ice1.jpg'
var url2 = './qualle.jpg'
var canvas = document.getElementById('canvas')
var canvas2 = document.getElementById('canvas2')

// inside: img, ctx
// outside: canvas, url

const fillCanvas = (currentCanvas, currentUrl) => {
    const ctx = currentCanvas.getContext('2d')
    const img = new Image()
    img.src = currentUrl
    img.onload = function () {
        var width = Math.min(1000, img.width);
        var height = img.height * (width / img.width);

        currentCanvas.width = width;
        currentCanvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
    }

    return ctx
}

const ctx = fillCanvas(canvas, url)
const ctx2 = fillCanvas(canvas2, url2)

let lock = false
var old = null;
let lastCtx = null;
canvas.addEventListener('mousemove', function (e){
  const w = canvas.offsetWidth,
        h = canvas.offsetHeight,
        area = w*h;
  var x = e.offsetX;
  var y = e.offsetY;
  var data = ctx.getImageData(0, 0, w, h).data;
  for (var ct=0, i=3, len=data.length; i<len; i+=4) {
      if(data[i]>50) ct++
  }

  const pctErased = (100 * ct / area).toFixed(2)
    if(pctErased < 50){
      canvas.style.opacity = "0"
    }

  const currentCtx = pctErased < 50 ? ctx2 : ctx
    if (currentCtx !== lastCtx){
        lock = true
        setTimeout(() => {
          lock = false
        }, 10000)
        old = {x: x, y: y};
    }
    
    if(pctErased > 50) {
        lastCtx = currentCtx
        if (old) {
            currentCtx.globalCompositeOperation = 'destination-out';

            currentCtx.beginPath();
            currentCtx.arc(x, y, 40 * Math.random(), 0, Math.PI * Math.random());
            currentCtx.fill();

            currentCtx.lineWidth = 200 * Math.random();
            currentCtx.beginPath();
            currentCtx.moveTo(old.x, old.y);
            currentCtx.lineTo(x, y);
            currentCtx.stroke();
        }
        old = {x: x, y: y};
    } else {
        if (currentCtx !== lastCtx){
            old = {x: x, y: y};
        }
        lastCtx = currentCtx
        if (old && !lock) {
            currentCtx.globalCompositeOperation = 'destination-out';

            currentCtx.beginPath();
            currentCtx.arc(x, y, 250, 0, Math.PI * 2);
            currentCtx.fill();

            currentCtx.lineWidth = 500;
            currentCtx.beginPath();
            currentCtx.moveTo(old.x, old.y);
            currentCtx.lineTo(x, y);
            currentCtx.stroke();
        }
        old = {x: x, y: y};
        
    }

});
