class Juego {
  constructor() {
    this.marinero = new Marinero();
    this.sirena = new Sirena();
    this.balas = [];
    this.tiempoInicio = 0;
    this.duracion = 20;
    this.tiempoUltimoDisparo = millis() + 1000;
    this.tiempoRestante = this.duracion;
  }

  iniciar() {
    this.tiempoInicio = millis();
    this.balas = [];
    this.tiempoUltimoDisparo = millis() + 1000;  //primera bala aparece despues de 1 seg
    this.tiempoRestante = this.duracion;
  }

  actualizar() {
    image(imgPantallas[1], 0, 0, width, height);
    
    //calculamos tiempo restante
    this.tiempoRestante = this.duracion - int((millis() - this.tiempoInicio) / 1000);

    //para ganar
    if (this.tiempoRestante <= 0) {
      estadoJuego = "ganaste";
      return;
    }

    this.marinero.actualizar(); //dbujamis marinero

    // para perder
    //Sirena dispara cada 1 segundo
    if (millis() - this.tiempoUltimoDisparo > 1000) {
      this.balas.push(new Bala(this.sirena.x, this.sirena.y));  //balas salen de la sirena
      this.tiempoUltimoDisparo = millis();
    }

    this.sirena.mostrar();


    //creamos las balas en el ciclo for con splice borramos las que ya 
    //no estan en la pantalla (varia la cantidad en el array)
    for (let i = this.balas.length - 1; i >= 0; i--) {
      let bala = this.balas[i];
      bala.actualizar();


      //si la bala colisiona perdiste
      if (bala.colisiona(this.marinero)) {
        estadoJuego = "perdiste";
      }
      
      if (bala.y > height) this.balas.splice(i, 1);
    }
  }

  mostrarTiempo() {
    textSize(20);
    fill(255);
    text("Tiempo: " + this.tiempoRestante, width / 2, 30);
  }

  mostrarPantallaInicio() {
    image(imgPantallas[0], 0, 0, width, height);
    fill(255);
    textSize(32);
    text("Evita la magia de la sirena!", width / 2, height / 2 - 40);
    textSize(20);
    text("Evitá las balas usando < y >", width / 2, height / 2 + 40);
    text("Presioná ESPACIO para empezar", width / 2, height / 2 + 80);
    textSize(14);
    text("Créditos: Lu y Mar", width / 2, height - 30);
  }

  mostrarPantallaGanaste() {
    image(imgPantallas[3], 0, 0, width, height);
    fill(255);
    textSize(30);
    text("¡Ganaste! Sobreviviste 20 segundos!", width / 2, height / 2);
    textSize(18);
    text("Presioná 'R' para reiniciar", width / 2, height / 2 + 40);
  }

  mostrarPantallaPerdiste() {
    image(imgPantallas[2], 0, 0, width, height);
    fill(255);
    textSize(30);
    text("Te atrapó la sirena!", width / 2, height / 2);
    textSize(18);
    text("Presioná 'R' para intentar otra vez", width / 2, height / 2 + 40);
  }
}
