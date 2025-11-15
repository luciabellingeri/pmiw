//tpfinalparte1 Lucia Bellingeri y Mara Velazco Comisión 3
// https://youtu.be/yi6MG09_aTo?si=31jnx0dmQSn7yCO_

let imgPantallas = [];
let pantalla;
let sonidofondo;

function preload() {
  imgPantallas[0] = loadImage("./data/img0.png");
  imgPantallas[1] = loadImage("./data/img1.png");
  imgPantallas[2] = loadImage("./data/img2.png");
  imgPantallas[3] = loadImage("./data/img3.png");
  imgPantallas[4] = loadImage("./data/img4.png");
  imgPantallas[5] = loadImage("./data/img5.png");
  imgPantallas[6] = loadImage("./data/img6.png");
  imgPantallas[7] = loadImage("./data/img7.png");
  imgPantallas[8] = loadImage("./data/img8.png");
  imgPantallas[9] = loadImage("./data/img9.png");
  imgPantallas[10] = loadImage("./data/img10.png");
  imgPantallas[11] = loadImage("./data/img11.png");
  imgPantallas[12] = loadImage("./data/img12.png");
  imgPantallas[13] = loadImage("./data/img13.png");
  imgPantallas[14] = loadImage("./data/img14.png");

  sonidofondo = loadSound("./data/SonidoFondo.mp3");
}

function setup() {
  createCanvas(640, 480);
  pantalla = 0;
  userStartAudio(); //para que funcione en ciertos navegadores
}

function draw() {
  background(0);

  if (pantalla === 0) {         // tocando en cualquier parte para a la pantalla 1
    mostrarPantallaInicio();
  } else if (pantalla === 1) {
    image(imgPantallas[1], 0, 0, width, height);
    mostrarTexto2Lineas("Un barco con marineros navega de noche.\n Aparece una melodía lejana");
    mostrarBoton("Me tapo los oídos", 130, 400, 150, 40);
    mostrarBoton("Escucho", 300, 400, 80, 40);
    mostrarBoton("Intentar dialogar", 470, 400, 150, 40);
  } else if (pantalla === 2) {
    image(imgPantallas[2], 0, 0, width, height);
    mostrarTexto("Quedo protegido pero la tripulación entra en trance");
    mostrarBoton("Ato a la tripulación", 170, 400, 165, 40);
    mostrarBoton("No ato a la tripulación", 440, 400, 200, 40);
  } else if (pantalla === 3) {
    image(imgPantallas[3], 0, 0, width, height);
    mostrarTexto("Salto al agua");
    mostrarBoton("Regresar al barco", 170, 400, 165, 40);
    mostrarBoton("Investigar el sonido", 440, 400, 200, 40);
  } else if (pantalla === 4) {
    image(imgPantallas[4], 0, 0, width, height);
    mostrarTexto("La sirena me ofrece un trato");
    mostrarBoton("Atacarla", 175, 400, 155, 40);
    mostrarBoton("Escucharla", 440, 400, 190, 40);
  } else if (pantalla === 5) {
    image(imgPantallas[5], 0, 0, width, height);
    mostrarTexto2Lineas("Al no poder moverse, la trupulación \n se mantiene a salvo");
    mostrarBoton("Continuar", width / 2, 400, 155, 40);
  } else if (pantalla === 6) {
    image(imgPantallas[6], 0, 0, width, height);
    mostrarTexto("La tripulación se lanza al agua y muere.");
    mostrarBoton("Continuar", width / 2, 400, 155, 40);
  } else if (pantalla === 7) {
    image(imgPantallas[7], 0, 0, width, height);
    mostrarTexto("Nadas con todas tus fuerzas");
    mostrarBoton("Subir al barco por la cuerda", 175, 400, 240, 40);
    mostrarBoton("Gritar para que me ayuden", 440, 400, 230, 40);
  } else if (pantalla === 8) {
    image(imgPantallas[8], 0, 0, width, height);
    mostrarTexto2Lineas("Me encuentro con la sirena, que canta \n cada vez mas fuerte...");
    mostrarBoton("Defenderme", 175, 400, 200, 40);
    mostrarBoton("Quedarme", 440, 400, 200, 40);
  } else if (pantalla === 9) {
    image(imgPantallas[9], 0, 0, width, height);
    mostrarTexto2Lineas("La sirena ofrece salvarte a cambio de \n toda la tripulación");
    mostrarBoton("Sacrificarme", 175, 400, 200, 40);
    mostrarBoton("Entregarlos", 440, 400, 200, 40);
  } else if (pantalla === 10) {
    image(imgPantallas[10], 0, 0, width, height);
    mostrarTexto2Lineas("Nadie responde y vuelves a escuchar \n el canto...");
    mostrarBoton("Continuar", width / 2, 400, 155, 40);
  } else if (pantalla === 11) {
    image(imgPantallas[11], 0, 0, width, height);
    mostrarTexto2Lineas("Todos se salvan. \n ¡La sirena ha sido derrotada!");
    mostrarBoton("Continuar", width / 2, 400, 155, 40);
  } else if (pantalla === 12) {
    image(imgPantallas[12], 0, 0, width, height);
    mostrarTexto("Te has quedado solo/a.");
    mostrarBoton("Continuar", width / 2, 400, 155, 40);
  } else if (pantalla === 13) {
    image(imgPantallas[13], 0, 0, width, height);
    mostrarTexto("No has logrado sobrevivir");
    mostrarBoton("Continuar", width / 2, 400, 155, 40);
  } else if (pantalla === 14) {
    image(imgPantallas[14], 0, 0, width, height);
    mostrarBoton("Reiniciar", width / 2, 400, 155, 40);
  }

  dibujarBotonSonido();
}


function dibujarBotonSonido() {  //dibujamos boton que cambia rojo y verde
  push();
  noStroke();
  fill(255, 255, 255, 150);
  circle(40, 40, 50);
  if (sonidofondo.isPlaying()) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  circle(40, 40, 30);
  pop();
}


function mostrarPantallaInicio() {
  image(imgPantallas[0], 0, 0, width, height); //cargamos pantalla de inicio
}

function mostrarBoton(texto_, x_, y_, ancho_, alto_) {
  push();
  translate(x_, y_);
  rectMode(CENTER);
  fill(0, 100, 70);
  rect(0, 0, ancho_, alto_);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(texto_, 0, 0);
  pop();
}

function mousePressed() {
  if (dist(mouseX, mouseY, 40, 40) < 30) {
    if (sonidofondo.isPlaying()) {
      sonidofondo.pause();
    } else {
      userStartAudio();
      sonidofondo.loop();
      sonidofondo.setVolume(0.1);
    }
    return;
  }

  if (pantalla === 0) {
    pantalla = 1;
  } else if (pantalla === 1) {
    if (colisionRectangular(130, 400, 150, 40)) {
      pantalla = 2;
    } else if (colisionRectangular(300, 400, 80, 40)) {
      pantalla = 3;
    } else if (colisionRectangular(470, 400, 150, 40)) {
      pantalla = 4;
    }
  } else if (pantalla === 2) {
    if (colisionRectangular(170, 400, 165, 40)) {
      pantalla = 5;
    } else if (colisionRectangular(440, 400, 200, 40)) {
      pantalla = 6;
    }
  } else if (pantalla === 3) {
    if (colisionRectangular(170, 400, 165, 40)) {
      pantalla = 7;
    } else if (colisionRectangular(440, 400, 200, 40)) {
      pantalla = 8;
    }
  } else if (pantalla === 4) {
    if (colisionRectangular(175, 400, 155, 40)) {
      pantalla = 11;
    } else if (colisionRectangular(440, 400, 190, 40)) {
      pantalla = 9;
    }
  } else if (pantalla === 5) {
    if (colisionRectangular(width / 2, 400, 155, 40)) {
      pantalla = 11;
    }
  } else if (pantalla === 6) {
    if (colisionRectangular(width / 2, 400, 155, 40)) {
      pantalla = 12;
    }
  } else if (pantalla === 7) {
    if (colisionRectangular(175, 400, 240, 40)) {
      pantalla = 6;
    } else if (colisionRectangular(440, 400, 230, 40)) {
      pantalla = 10;
    }
  } else if (pantalla === 8) {
    if (colisionRectangular(175, 400, 200, 40)) {
      pantalla = 11;
    } else if (colisionRectangular(440, 400, 200, 40)) {
      pantalla = 13;
    }
  } else if (pantalla === 9) {
    if (colisionRectangular(175, 400, 200, 40)) {
      pantalla = 13;
    } else if (colisionRectangular(440, 400, 200, 40)) {
      pantalla = 12;
    }
  } else if (pantalla === 10) {
    if (colisionRectangular(width / 2, 400, 155, 40)) {
      pantalla = 13;
    }
  } else if (pantalla === 11 || pantalla === 12 || pantalla === 13) {
    if (colisionRectangular(width / 2, 400, 155, 40)) {
      pantalla = 14;
    }
  }else if (pantalla === 14) {
    if (colisionRectangular(width / 2, 400, 155, 40)) {
      pantalla = 0;
    }
}
}

function colisionRectangular(x_, y_, ancho_, alto_) {
  if (
    mouseX > x_ - ancho_ / 2 && mouseX < x_ + ancho_ / 2 &&
    mouseY > y_ - alto_ / 2 && mouseY < y_ + alto_ / 2
  ) {
    return true;
  } else {
    return false;
  }
}

function mostrarTexto(texto) {
  fill(0, 0, 0, 150);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, 90, 560, 50);
  fill(255);
  textAlign(CENTER);
  textSize(18);
  text(texto, width / 2, 95);
}

function mostrarTexto2Lineas(texto) {
  fill(0, 0, 0, 150);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, 90, 560, 50);
  fill(255);
  textAlign(CENTER);
  textSize(18);
  text(texto, width / 2, 85);
}
