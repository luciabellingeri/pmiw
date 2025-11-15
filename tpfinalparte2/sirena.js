class Sirena {
  constructor() {
    this.x = width / 2;
    this.y = 120;
    this.tamImg = 120;
  }

  mostrar() {
    imageMode(CENTER); 
    image(imgPantallas[5], this.x, this.y, this.tamImg, this.tamImg);
    imageMode(CORNER);
  }
}
