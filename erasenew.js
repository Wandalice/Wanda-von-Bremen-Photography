
// inside: img, ctx
// outside: canvas, url

let lock = false // First we set up a global lock that will disable any canvas events during a fadeout

const fillCanvas = (currentCanvas, currentUrl) => {
  console.log (currentCanvas, currentUrl)
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

    if (currentCanvas===canvas || currentCanvas===canvas53) {
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

Array.from(new Array(35)).forEach((_, number) => {
  const url = `./book/canvas${number + 1}.jpg`
  const canvas = document.getElementById(`canvas${number + 50}`)
  fillCanvas(canvas, url)
})


setTimeout(function () {
  document.querySelectorAll('canvas').forEach((canvas) => {
canvas.style.opacity=1
  })
}, 3000 );
