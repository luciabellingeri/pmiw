// tp1 Lucia Belen Bellingeri Com 3
// https://www.youtube.com/watch?v=anbZPk-JjX4

let tunel;
let colorDeLinea = 0;      //variables globales (ahora con let)
let maxCuadrado = 200; 

function preload(){
  tunel = loadImage("./data/M_6.jpg");       //carga d imagen ahora fuera del setup
}


function setup() {
  createCanvas(800, 400);       // canvas en vez de size
}

function draw() {
  image(tunel, 0, 0, width / 2, height); 

  let dx = 0; 
  let dy = 0;       //gla distancia enntre el mouse y el centro de los cuadrados en un principio es 0

  let areaX = width / 2;   
  let areaY = 0;     
  let areaAncho = width / 2;      // definimos el espacio de la mitad derecha del canvas
  let areaAlto = height;     

  let anchoCuadrados = areaAncho / 2; 
  let altoCuadrados = areaAlto / 2;         //definimos los minis cuadrados, 4, 2 filas, 2 columnas

  let centroX = areaX + (anchoCuadrados / 2); 
  let centroY = areaY + (altoCuadrados / 2);   //definimos el centro del primer cuadrado arriba a la izquierda que va a guiar el efecto

  if (mouseX > 400) { 
    dx = mouseX - centroX;
    dy = mouseY - centroY;      // medimos la distancia del centro del prier cuadrado guia
  }

  let numFilasCuadrados = 2;    
  let numColumnasCuadrados = 2; 

  // ciclo for anidado
  for (let fila = 0; fila < numFilasCuadrados; fila++) { 
    for (let columna = 0; columna < numColumnasCuadrados; columna++) { 
      let centroXCuadrados = areaX + (columna * anchoCuadrados) + (anchoCuadrados / 2);     // calculamos centro para cada espacio cuadrado
      let centroYCuadrados = areaY + (fila * altoCuadrados) + (altoCuadrados / 2);    

      dibujarCuadrados(centroXCuadrados, centroYCuadrados, dx, dy);        //llamamos a la funcion
    }
  }
}

function dibujarCuadrados(centroXCuadrados, centroYCuadrados, dx, dy) {
  rectMode(CENTER);
  stroke(colorDeLinea);

  let grosorVariable = 7; 
  if (mouseX > 400) {
    grosorVariable = map(mouseX, 400, 600, 2, 12);
  }

  strokeWeight(grosorVariable);
  fill(255); 

  let cantCuadrados = 7; 
  let espacioCuadrados = calcularEspaciado(cantCuadrados, maxCuadrado);   //se calcula con la funcion que retorna la dist de los cuadrados cconcentricos

  for (let i = 0; i < cantCuadrados; i++) {                    //dibujamos 7 cuadrados
    let cantidadDeMovimiento = i / cantCuadrados; 
    let movimientoX = centroXCuadrados + dx * cantidadDeMovimiento;         // los cuadrados mas chicos se mueven mas y los mas grandes casi nada
    let movimientoY = centroYCuadrados + dy * cantidadDeMovimiento;         
    let tamañoCuadrado = maxCuadrado - i * espacioCuadrados;                //con i multiplicado vamos reduciendo el tamaño de los cuadrados
    rect(movimientoX, movimientoY, tamañoCuadrado, tamañoCuadrado);               
  }
}

function calcularEspaciado(numCuadrados, tamañoMaximo) {      //funcion que retorna valor
  return tamañoMaximo / (numCuadrados + 1);
}

function keyPressed() {
  if (key == 'c') {
    colorDeLinea = color(random(255), random(255), random(255));
  } else if (key == 'r') {
    colorDeLinea = 0;
  }
}
