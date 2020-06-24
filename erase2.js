var url = './book/canvas.jpg'
var url2 = './book/canvas1.jpg'
var url3 = './book/canvas2.jpg'
var url4 = './book/canvas3.jpg'
var url5 = './book/canvas4.jpg'
var url6 = './book/canvas5.jpg'
var url7 = './book/canvas6.jpg'
var url8 = './book/canvas7.jpg'
var url9 = './book/canvas8.jpg'
var url10 = './book/canvas9.jpg'
var url11 = './book/canvas10.jpg'
var url12 = './book/canvas11.jpg'
var url13 = './book/canvas12.jpg'
var url14 = './book/canvas13.jpg'
var url15 = './book/canvas14.jpg'
var url16 = './book/canvas15.jpg'
var url17 = './book/canvas16.jpg'
var url18 = './book/canvas17.jpg'
var url19 = './book/canvas18.jpg'
var url20 = './book/canvas19.jpg'
var url21 = './book/canvas20.jpg'






var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");
var canvas4 = document.getElementById("canvas4");
var canvas5 = document.getElementById("canvas5");
var canvas6 = document.getElementById("canvas6");
var canvas7 = document.getElementById("canvas7");
var canvas8 = document.getElementById("canvas8");
var canvas9 = document.getElementById("canvas9");
var canvas10 = document.getElementById("canvas10");
var canvas11 = document.getElementById("canvas11");
var canvas12 = document.getElementById("canvas12");
var canvas13 = document.getElementById("canvas13");
var canvas14 = document.getElementById("canvas14");
var canvas15 = document.getElementById("canvas15");
var canvas16 = document.getElementById("canvas16");
var canvas17 = document.getElementById("canvas17");
var canvas18 = document.getElementById("canvas18");
var canvas19 = document.getElementById("canvas19");
var canvas20 = document.getElementById("canvas20");
var canvas21 = document.getElementById("canvas21");
// inside: img, ctx
// outside: canvas, url

let lock = false // First we set up a global lock that will disable any canvas events during a fadeout

const fillCanvas = (currentCanvas, currentUrl) => {
  const ctx = currentCanvas.getContext("2d");
  const img = new Image();
  img.src = currentUrl;
  img.onload = function() {
    var width = Math.min(1200, img.width);
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
      if (data[i] > 90) ct++;
    }

    const pctVisible = ((100 * ct) / area).toFixed(2);
    let targetPct = 90

    if (currentCanvas===canvas9 || currentCanvas===canvas8) {
      targetPct = 50
    }
    // If this is newly erased (it hasn't been hidden yet) set the global lock. Since the effect of this
    // conditional nullifies its condition, it will only ever happen once.
    if (pctVisible < targetPct && currentCanvas.style["pointer-events"] !== "none") {
      lock = true
      currentCanvas.style["pointer-events"] = "none"
      currentCanvas.style.opacity = "0"

      // In 2000 millisecond unset the global lock
      setTimeout(() => {
        lock = false
      }, 2000)
    }

    // Only do the erasing if the global lock is not set.
    if (old && !lock) {
      ctx.globalCompositeOperation = "destination-out";

      ctx.beginPath();
      ctx.arc(x, y, 10 * Math.random(), 0, Math.PI * Math.random());
      ctx.fill();

      ctx.lineWidth = 120;
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
const ctx7 = fillCanvas(canvas7, url7);
const ctx8 = fillCanvas(canvas8, url8);
const ctx9 = fillCanvas(canvas9, url9);
const ctx10 = fillCanvas(canvas10, url10);
const ctx11 = fillCanvas(canvas11, url11);
const ctx12 = fillCanvas(canvas12, url12);
const ctx13 = fillCanvas(canvas13, url13);
const ctx14 = fillCanvas(canvas14, url14);
const ctx15 = fillCanvas(canvas15, url15);
const ctx16 = fillCanvas(canvas16, url16);
const ctx17 = fillCanvas(canvas17, url17);
const ctx18 = fillCanvas(canvas18, url18);
const ctx19 = fillCanvas(canvas19, url19);
const ctx20 = fillCanvas(canvas20, url20);
const ctx21 = fillCanvas(canvas21, url21);
