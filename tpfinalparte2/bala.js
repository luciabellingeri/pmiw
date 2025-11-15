class Bala {
  constructor(x, y) {
    this.x = x + random(-270, 270);  //balas salen random en x hacia abajo en i  
    this.y = y;
    this.tamImg = 30;
    this.vel = 5;
  }

  actualizar() {
    this.y += this.vel;   // baja a cierta velocidad
    this.mostrar();
  }

  mostrar() {
    imageMode(CENTER);
    image(imgPantallas[6], this.x, this.y, this.tamImg, this.tamImg);
    imageMode(CORNER);
  }


  colisiona(marinero) {
    
    //calcular distancia entre bala y marinero. di d es menor hay colision
    let d = dist(this.x, this.y, marinero.x, marinero.y);
    return d < (this.tamImg / 2 + marinero.tamImg / 2.2);
  }
}
