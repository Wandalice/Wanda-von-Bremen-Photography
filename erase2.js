var url = './wanda/xkuh.jpg'
var url2 = './wanda/bookweitercheck4.jpg'
var url3 = './wanda/bookweitercheck5.jpg'
var url4 = './wanda/bookweitercheck6.jpg'
var url5 = './wanda/bügeleisen.jpg'
var url6 = './wanda/bookweitercheck8.jpg'

var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");
var canvas4 = document.getElementById("canvas4");
var canvas5 = document.getElementById("canvas5");
var canvas6 = document.getElementById("canvas6");
// inside: img, ctx
// outside: canvas, url

let lock = false // First we set up a global lock that will disable any canvas events during a fadeout

const fillCanvas = (currentCanvas, currentUrl) => {
  const ctx = currentCanvas.getContext("2d");
  const img = new Image();
  img.src = currentUrl;
  img.onload = function() {
    var width = Math.min(900, img.width);
    var height = img.height * (width / img.width);

    currentCanvas.width = width;
    currentCanvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
  };

  let old = null;
  currentCanvas.addEventListener("mousemove", e => {
    const w = currentCanvas.offsetWidth,
      h = currentCanvas.offsetHeight,
      area = w * h,
      x = e.offsetX,
      y = e.offsetY;
    var data = ctx.getImageData(0, 0, w, h).data;

    let ct = 0
    for (var i = 3, len = data.length; i < len; i += 4) {
      if (data[i] > 60) ct++;
    }

    const pctVisible = ((100 * ct) / area).toFixed(2);

    // If this is newly erased (it hasn't been hidden yet) set the global lock. Since the effect of this
    // conditional nullifies its condition, it will only ever happen once.
    if (pctVisible < 60 && currentCanvas.style["pointer-events"] !== "none") {
      lock = true
      currentCanvas.style["pointer-events"] = "none"
      currentCanvas.style.opacity = "0"

      // In 2000 millisecond unset the global lock
      setTimeout(() => {
        lock = false
      }, 3000)
    }

    // Only do the erasing if the global lock is not set.
    if (old && !lock) {
      ctx.globalCompositeOperation = "destination-out";

      ctx.beginPath();
      ctx.arc(x, y, 40 * Math.random(), 0, Math.PI * Math.random());
      ctx.fill();

      ctx.lineWidth = 70;
      ctx.beginPath();
      ctx.moveTo(old.x, old.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    old = { x: x, y: y };

    // Maybe do something with ctx here ....................

    console.log(currentCanvas.id, w, h, area, x, y);

  });
  return ctx;
};
const ctx = fillCanvas(canvas, url);
const ctx2 = fillCanvas(canvas2, url2);
const ctx3 = fillCanvas(canvas3, url3);
const ctx4 = fillCanvas(canvas4, url4);
const ctx5 = fillCanvas(canvas5, url5);
const ctx6 = fillCanvas(canvas6, url6);
