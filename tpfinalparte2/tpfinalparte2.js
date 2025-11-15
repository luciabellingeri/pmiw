// https://youtu.be/5naGVB2djhU?si=3ikp14NXWazQMjIr
// Alumnas: Lucia Bellingeri y Mara Velazco
// tpfinalparte2


let juego;
let estadoJuego = "inicio";
let imgPantallas = [];
let sonidoFondo; 
let fuente;

function preload() {
  
  //carga de imagenes con ciclo for y array
  for (let i = 0; i <= 6; i++) {   
    imgPantallas[i] = loadImage("./data/img" + i + ".png");
  }
  sonidoFondo = loadSound("./data/sonidoFondo.mp3"); 
  
  fuente = loadFont("./data/MetalMania-Regular.ttf"); 
}


function setup() {
  createCanvas(640, 480);
  textAlign(CENTER);
  juego = new Juego();
  textFont(fuente);
}


function draw() {

  if (estadoJuego === "inicio") {
    juego.mostrarPantallaInicio();
  } 
  else if (estadoJuego === "jugando") {
    juego.actualizar();
    juego.mostrarTiempo();
  } 
  else if (estadoJuego === "ganaste") {
    juego.mostrarPantallaGanaste();
  } 
  else if (estadoJuego === "perdiste") {
    juego.mostrarPantallaPerdiste();
  }
}


function keyPressed() {
  if (estadoJuego === "inicio" && key === ' ') {
    estadoJuego = "jugando";
    juego.iniciar();

    userStartAudio();
    if (!sonidoFondo.isPlaying()) {
      sonidoFondo.loop();
      sonidoFondo.setVolume(0.5);
    }
  }

  if ((estadoJuego === "ganaste" || estadoJuego === "perdiste") && key === 'r') {
    estadoJuego = "inicio";
  }
}
