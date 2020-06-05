var url = './wanda/xxbird.jpg'
var url2 = './wanda/xxleave.jpg'
var url3 = './wanda/xxtot.jpg'

var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");

// inside: img, ctx
// outside: canvas, url

const fillCanvas = (currentCanvas, currentUrl) => {
  const ctx = currentCanvas.getContext("2d");
  const img = new Image();
  img.src = currentUrl;
  img.onload = function() {
    var width = Math.min(400, img.width);
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
      if (data[i] > 50) ct++;
    }

    const pctVisible = ((100 * ct) / area).toFixed(2);
    console.log("pctv", pctVisible)
    if (pctVisible < 50) {
      currentCanvas.style["pointer-events"] = "none"

          currantCanvas.style.opacity = "0"
    }

    if (old) {
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

    return ctx;
    return ctx2;
  });
};
const ctx = fillCanvas(canvas, url);
const ctx2 = fillCanvas(canvas2, url2);
const ctx3 = fillCanvas(canvas3, url3);
