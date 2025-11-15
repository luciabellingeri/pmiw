class Marinero {
  constructor() {
    this.x = width / 2;
    this.y = height - 100;
    this.tamImg = 80;
    this.vel = 5;
  }

  actualizar() {
    this.mover();
    this.mostrar();
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) this.x -= this.vel;
    if (keyIsDown(RIGHT_ARROW)) this.x += this.vel;
    this.x = constrain(this.x, this.tamImg / 2, width - this.tamImg / 2);
  }

  mostrar() {
    imageMode(CENTER); 
    image(imgPantallas[4], this.x, this.y, this.tamImg, this.tamImg);
    imageMode(CORNER); 
  }
}
