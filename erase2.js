var url = './book/start1.jpg'
var url3 = './book/canvas_2.jpg'
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
var url22 = './book/canvas21.jpg'
var url23 = './book/canvas22.jpg'
var url24 = './book/canvas23.jpg'
var url25 = './book/canvas24.jpg'
var url26 = './book/canvas25.jpg'
var url27 = './book/canvas26.jpg'
var url28 = './book/canvas27.jpg'
var url29 = './book/canvas28.jpg'
var url30 = './book/canvas29.jpg'
var url31 = './book/canvas30.jpg'
var url32 = './book/canvas31.jpg'
var url33 = './book/canvas32.jpg'
var url34 = './book/canvas33.jpg'
var url35 = './book/canvas34.jpg'
var url36 = './book/canvas35.jpg'






var canvas = document.getElementById("canvas");
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
var canvas22 = document.getElementById("canvas22");
var canvas23 = document.getElementById("canvas23");
var canvas24 = document.getElementById("canvas24");
var canvas25 = document.getElementById("canvas25");
var canvas26 = document.getElementById("canvas26");
var canvas27 = document.getElementById("canvas27");
var canvas28 = document.getElementById("canvas28");
var canvas29 = document.getElementById("canvas29");
var canvas30 = document.getElementById("canvas30");
var canvas31 = document.getElementById("canvas31");
var canvas32 = document.getElementById("canvas32");
var canvas33 = document.getElementById("canvas33");
var canvas34 = document.getElementById("canvas34");
var canvas35 = document.getElementById("canvas35");
var canvas36 = document.getElementById("canvas36");

// inside: img, ctx
// outside: canvas, url

let lock = false // First we set up a global lock that will disable any canvas events during a fadeout

const fillCanvas = (currentCanvas, currentUrl) => {
  const ctx = currentCanvas.getContext("2d");
  const img = new Image();
  img.src = currentUrl;
  img.onload = function() {
    var width = Math.min(1100, img.width);
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
    let targetPct = 80

    if (currentCanvas===canvas || currentCanvas===canvas3) {
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
const ctx22 = fillCanvas(canvas22, url22);
const ctx23 = fillCanvas(canvas23, url23);
const ctx24 = fillCanvas(canvas24, url24);
const ctx25 = fillCanvas(canvas25, url25);
const ctx26 = fillCanvas(canvas26, url26);
const ctx27 = fillCanvas(canvas27, url27);
const ctx28 = fillCanvas(canvas28, url28);
const ctx29 = fillCanvas(canvas29, url29);
const ctx30 = fillCanvas(canvas30, url30);
const ctx31 = fillCanvas(canvas31, url31);
const ctx32 = fillCanvas(canvas32, url32);
const ctx33 = fillCanvas(canvas33, url33);
const ctx34 = fillCanvas(canvas34, url34);
const ctx35 = fillCanvas(canvas35, url35);
const ctx36 = fillCanvas(canvas36, url36);

setTimeout(function () {
  document.querySelectorAll('canvas').forEach((canvas) => {
canvas.style.opacity=1
  })
}, 3000 );
