export const keyDownHandler = (e) => {
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

export const keyUpHandler = (e) => {
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
