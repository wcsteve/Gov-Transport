// import { keyDownHandler, keyUpHandler } from './gameplay/controls'

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');


function drawBank(){
  ctx.fillStyle = "brown";
  ctx.fillRect(0, 440, 570, 45);
  ctx.fillRect(0, 210, 570, 45);
}


function drawRoad(yLocation, dashLength){
  ctx.beginPath();
  ctx.moveTo(0, yLocation);
  ctx.lineTo(570, yLocation);
  ctx.strokeStyle = "white";
  ctx.strokeWidth = 2;
  ctx.setLineDash([dashLength]);
  ctx.stroke();
}




const frogImg = new Image();
frogImg.src = 'src/sprites/frogger.png';
var sx = 45;
var sy = 0;
var swidth = 45;
var sheight = 45;
var x = 60;
var y = 444;
var width = 30;
var height = 30;

const car = new Image();
car.src = 'src/sprites/pink_car.png'
const redCar = new Image();
redCar.src = 'src/sprites/red_car_left.png'
const truck = new Image();
truck.src = 'src/sprites/truck1Right.png'
let truckX1 = 0;
let truckY1 = 395;
let truckX3 = canvas.width
let truckY3 = 258
let truckHeight = 45;
let truckWidth = 139;
let carX1 = 100;
let carY1 = 345;
let carHeight = 45;
let carWidth = 45;
let carX2 = 350;
let carY2 = 345;
let truckX2 = -300;
let truckY2 = 395;
let redCarHeight = 45;
let redCarWidth = 45;
let redCarX1 = 0;
let redCarY1 = 302;


function drawTruckRight(){
  var trucksX = [truckX1, truckX2, truckX3];
  var trucksY = [truckY1, truckY2, truckY3];
  var sX = [139, 139, 0]

  for (let i = 0; i < trucksX.length; i++){
    ctx.drawImage(truck, sX[i], 0, 139, 45, trucksX[i], trucksY[i], truckWidth, truckHeight)
  }


  if (truckX1 < canvas.width - 5) {
    truckX1 = truckX1 + 2
  } else {
    truckX1 = -130
  }

  if (truckX2 < canvas.width - 5) {
    truckX2 = truckX2 + 2
  } else {
    truckX2 = -130
  }

  if (truckX3 > -139) {
    truckX3 = truckX3 - 2
  } else {
    truckX3 = canvas.width + 50
  }
}
function drawCarLeft(){
  var carColor = [car, car, redCar]
  var carsX = [carX1, carX2, redCarX1];
  var carsY = [carY1, carY2, redCarY1];

  for (let i = 0; i < carsX.length; i++){
    ctx.drawImage(carColor[i], 0, 0, 45, 40, carsX[i], carsY[i], carHeight, carWidth)
  }

  if (carX1 > -45) {
    carX1 = carX1 - 4
  } else {
    carX1 = canvas.width + 50
  }

  if (carX2 > -45) {
    carX2 = carX2 - 4
  } else {
    carX2 = canvas.width + 50
  }

  if (redCarX1 < canvas.width + 40) {
    redCarX1 = redCarX1 + 3.5
  } else {
    redCarX1 = -40
  }
}

function runOver(){
  var carsX = [carX1, carX2, redCarX1];
  var carsY = [carY1, carY2, redCarY1];
  var trucksX = [truckX1, truckX2, truckX3];
  var trucksY = [truckY1, truckY2, truckY3];

  for (let i = 0; i < carsX.length; i++) {
    if (carsX[i] <= x + width &&
      carsX[i] + carWidth >= x &&
      carsY[i] <= y + height && carsY[i] + carHeight >= y ) {
        y = 444
      }
  }
  for (let i = 0; i < trucksX.length; i++){
    if (trucksX[i] + 3 <= x + width &&
      trucksX[i] + truckWidth >= x &&
      trucksY[i] <= y + height && trucksY[i] + truckHeight >= y ) {
        y = 444
      }
  }
}
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

function keyUpHandler(e) {
  if (e.keyCode == 68 || e.keyCode == 39) {
    rightPressed = false;
  }

  if (e.keyCode == 65 || e.keyCode == 37) {
    leftPressed = false;
  }

  if (e.keyCode == 87 || e.keyCode == 38) {
    upPressed = false;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    downPressed = false;
  }
}

function keyDownHandler(e) {
  if (e.keyCode == 68 || e.keyCode == 39) {
    rightPressed = true;
  }

  if (e.keyCode == 65 || e.keyCode == 37) {
    leftPressed = true;
  }

  if (e.keyCode == 87 || e.keyCode == 38) {
    upPressed = true;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    downPressed = true;
  }
}

document.addEventListener('keydown', keyUpHandler, false);
document.addEventListener('keyup', keyDownHandler, false);

var padWidth = 30;
var padHeight = 30;
var padX1 = 20;
var padY1 = 4;
var padX2 = 120;
var padY2 = 4;
var padX3 = 220;
var padY3 = 4;
var padX4 = 320;
var padY4 = 4;
var padX5 = 420;
var padY5 = 4;
var padX6 = 520;
var padY6 = 4;

var pad1 = false;
var pad2 = false;
var pad3 = false;
var pad4 = false;
var pad5 = false;
var pad6 = false;

function drawPads(){
	ctx.fillStyle = "seagreen";
	var padsX = [padX1, padX2, padX3, padX4, padX5, padX6];
	var padsY = [padY1, padY2, padY3, padY4, padY5, padY6];

	for (i = 0; i < padsX.length; i++){
	ctx.fillRect(padsX[i], padsY[i], padWidth, padHeight);
	}
}

function onPad(){
	if (padX1 <= x + width &&
		padX1 + padWidth >= x &&
		padY1 + padHeight >= y &&
		padY1 <= y + height) {
			pad1 = true;
			y = 444;
			}

	else if (padX2 <= x + width &&
			padX2 + padWidth >= x &&
			padY2 + padHeight >= y &&
			padY2 <= y + height) {
				pad2 = true;
				y = 444;
				}

	else if (padX3 <= x + width &&
			padX3 + padWidth >= x &&
			padY3 + padHeight >= y &&
			padY3 <= y + height) {
				pad3 = true;
				y = 444;
				}

	else if (padX4 <= x + width &&
			padX4 + padWidth >= x &&
			padY4 + padHeight >= y &&
			padY4 <= y + height) {
				pad4 = true;
				y = 444;
				}

	else if (padX5 <= x + width &&
			padX5 + padWidth >= x &&
			padY5 + padHeight >= y &&
			padY5 <= y + height) {
				pad5 = true;
				y = 444;
				}

	else if (padX6 <= x + width &&
			padX6 + padWidth >= x &&
			padY6 + padHeight >= y &&
			padY6 <= y + height) {
				pad6 = true;
				y = 444;
				}

	else if (y < 48){
		y = 444;
		// lives = lives - 1;
		}

	var pads = [pad1, pad2, pad3, pad4, pad5, pad6];
	var padsX = [padX1, padX2, padX3, padX4, padX5, padX6];
	var padsY = [padY1, padY2, padY3, padY4, padY5, padY6];

	for (i = 0; i < pads.length; i++){

		if (pads[i] === true) {
			ctx.drawImage(frogImg, 0, 0, 40, 40, padsX[i], padsY[i], 30, 30);
		}
	}
}

function drawFrog(){
  ctx.drawImage(frogImg, sx, sy, swidth, sheight, x, y, width, height);
}

let logX1 = 300;
let logY1 = 178;
let logX2 = 40;
let logY2 = 178;
let logX3 = 100;
let logY3 = 136;
let logX4 = 400;
let logY4 = 136;
let logX5 = 480;
let logY5 = 92;
let logX6 = 60;
let logY6 = 92;
let logX7 = 120;
let logY7 = 48;
let logX8 = 500;
let logY8 = 48;
let logWidth = 120;
let logHeight = 30;

function moveLogs(){
  if (logX1 < canvas.width + 100) {
    logX1 += 2;
  } else {
    logX1 = -100;
  }

  if (logX2 < canvas.width + 100) {
    logX2 += 2;
  } else {
    logX2 = -100;
  }

  if (logX3 > 0 - logWidth) {
    logX3 -= 2;
  } else {
    logX3 = canvas.width + 100;
  }

  if (logX4 > 0 - logWidth) {
    logX4 -= 2;
  } else {
    logX4 = canvas.width + 100;
  }

  if (logX5 < canvas.width + 100) {
    logX5 += 3;
  } else {
    logX5 = -100;
  }

  if (logX6 < canvas.width + 100) {
    logX6 += 3;
  } else {
    logX6 = -100;
  }

  if (logX7 > 0 - logWidth) {
    logX7 -= 2;
  } else {
    logX7 = canvas.width + 100;
  }

  if (logX8 > 0 - logWidth) {
    logX8 -= 2;
  } else {
    logX8 = canvas.width + 100;
  }
}


function drawLogs(){
  ctx.fillStyle = "tan";
  var logsX = [logX1, logX2, logX3, logX4, logX5, logX6, logX7, logX8];
  var logsY = [logY1, logY2, logY3, logY4, logY5, logY6, logY7, logY8];

  for (let i = 0; i < logsX.length; i++) {
    ctx.fillRect(logsX[i], logsY[i], logWidth, logHeight);
  }
}

function water(){
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 570, 220);
}
function float(){
  if (logX1 <= x + width - 17 &&
        logX1 + logWidth >= x + 17 &&
        logY1 + logHeight >= y &&
        logY1 <= y + height) {
          if (x < canvas.width - 25){
            x += 2;
          }
  } else if (logX2 <= x + width - 17 &&
              logX2 + logWidth >= x + 17 &&
              logY2 + logHeight >= y &&
              logY2 <= y + height){
          if (x < canvas.width - 25){
            x += 2
          }
  } else if (logX3 <= x + width - 17 &&
              logX3 + logWidth >= x + 17 &&
              logY3 + logHeight >= y &&
              logY3 <= y + height){
          if (x > 0){
            x -= 2
          }
  } else if (logX4 <= x + width - 17 &&
              logX4 + logWidth >= x + 17 &&
              logY4 + logHeight >= y &&
              logY4 <= y + height){
          if (x > 0){
            x -= 2
          }
  } else if (logX5 <= x + width - 17 &&
              logX5 + logWidth >= x + 17 &&
              logY5 + logHeight >= y &&
              logY5 <= y + height){
          if (x < canvas.width - 25){
            x += 3
          }
  } else if (logX6 <= x + width - 17 &&
              logX6 + logWidth >= x + 17 &&
              logY6 + logHeight >= y &&
              logY6 <= y + height){
          if (x < canvas.width - 25){
            x += 3
          }
  } else if (logX7 <= x + width - 17 &&
              logX7 + logWidth >= x + 17 &&
              logY7 + logHeight >= y &&
              logY7 <= y + height){
          if (x > 0){
            x -= 2
          }
  } else if (logX8 <= x + width - 17 &&
              logX8 + logWidth >= x + 17 &&
              logY8 + logHeight >= y &&
              logY8 <= y + height){
          if (x > 0){
            x -= 2
          }
  } else if (y < 220 && y > 48) {
    y = 488;
  }
}

function moveFrog(){
  if (upPressed === true && up === true && y > 20) {
    y = y - 44;
    up = false;
    sx = 45;
  }

  if (rightPressed === true && right === true && x + width < canvas.width) {
    x = x + 44;
    right = false;
    sx = 0;
  }

  if (downPressed === true && down === true && y + height < canvas.height) {
    y = y + 44;
    down = false;
    sx = 135;
  }

  if (leftPressed === true && left === true && x > 20) {
    x = x - 44;
    left = false;
    sx = 90;
  }

  if (rightPressed === false) {
    right = true;
  }

  if (leftPressed === false) {
    left = true;
  }

  if (upPressed === false) {
    up = true;
  }

  if (downPressed === false) {
    down = true;
  }
}

function drawBackground(){
  drawRoad(350, 0);
  drawRoad(305, 5);
  drawRoad(395, 5);
  water();
  drawBank();
}
function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBackground();
  drawLogs();
  moveLogs();
  drawFrog();
  float();
  drawPads();
  onPad();
  drawCarLeft();
  drawTruckRight();
  moveFrog();
  runOver();
  requestAnimationFrame(draw);
}

draw();
