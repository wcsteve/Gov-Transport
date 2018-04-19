var padWidth = 30;
var padHeight = 30;

var pad1 = {x: 20, y: 4, onPad: false};
var pad2 = {x: 120, y: 4, onPad: false};
var pad3 = {x: 220, y: 4, onPad: false};
var pad4 = {x: 320, y: 4, onPad: false};
var pad5 = {x: 420, y: 4, onPad: false};
var pad6 = {x: 520, y: 4, onPad: false};

function onPad(){
  let pads = [pad1, pad2, pad3, pad4, pad5, pad6];

  for (let i = 0; i < pads.length; i++) {
    let pad = pads[i];
    if (pad.onPad === true) {
      ctx.drawImage(frogImg, sx, sy, swidth, sheight, pad.x, pad.y, 30, 30);
    }
    if (pad.x <= x + width &&
          pad.x + padWidth >= x &&
          pad.y + padHeight >= y &&
          pad.y <= y + height) {
            pad.onPad = true;
            y = 444;
    } else if (y < 48) {
      y = 444;
    }

  }
}
function drawPads(){
  ctx.fillStyle = "seagreen";
  let pads = [pad1, pad2, pad3, pad4, pad5, pad6];
  for (let i = 0; i < pads.length; i++) {
    let pad = pads[i];
    ctx.fillRect(pad.x, pad.y, padWidth, padHeight)
  }
}
