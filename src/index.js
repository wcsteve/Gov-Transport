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
  if (e.keyCode == 39) {
    rightPressed = false;
  }

  if (e.keyCode == 37) {
    leftPressed = false;
  }

  if (e.keyCode == 38) {
    upPressed = false;
  }

  if (e.keyCode == 40) {
    downPressed = false;
  }
}

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  }

  if (e.keyCode == 37) {
    leftPressed = true;
  }

  if (e.keyCode == 38) {
    upPressed = true;
  }

  if (e.keyCode == 40) {
    downPressed = true;
  }
}

document.addEventListener('keydown', keyUpHandler, false);
document.addEventListener('keyup', keyDownHandler, false);


function drawFrog(){
  ctx.drawImage(frogImg, sx, sy, swidth, sheight, x, y, width, height);
}

function moveLogs(){
  if (logX1 < canvas.width + 100) {
    logX1 += 2;
  } else {
    logX1 = -100;
  }
}

let logX1 = 300;
let logY1 = 180;
let logWidth = 120;
let logHeight = 30;

function drawLogs(){
  ctx.fillStyle = "tan";
  ctx.fillRect(logX1, logY1, logWidth, logHeight);
}

function water(){
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 570, 220);
}
function float(){
  if (y < 220) {
    if (logX1 <= x + width &&
        logX1 + logWidth >= x &&
        logY1 + logHeight >= y &&
        logY1 <= y + height){
      if (x < canvas.width-30) {
        x += 2;
      }
    }
  } else {
    y == 488
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
  drawCarLeft();
  drawTruckRight();
  moveFrog();
  runOver();
  float();
  requestAnimationFrame(draw);
}

draw();
