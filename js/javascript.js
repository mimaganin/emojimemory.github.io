var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function embaralharCartas() {
  var resultado;
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var cartasEmbaralhadas = embaralharCartas();
  mesa.innerHTML = "";
 

  cartasEmbaralhadas.forEach(function(elemento) {
    var tarjeta = document.createElement("div");
    
    tarjeta.innerHTML = 
      `<div class="tarjeta">
        <div class="tarjeta__contenido">
        ${elemento}
        </div>
      </div>`
  
      mesa.appendChild(tarjeta);

  });
}

function descobrir(){
   this.classList.add("descoberta")
}
  
reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento){
    elemento.addEventListener("click", descobrir)
});


  // EJERCICIO: recorre el array de tarjetasBarajadas y para cada
  // elemento, crea un div (cárgalo en una variable) y declara que su
  // innerHTML es el div con la clase "tarjeta" y en el interior
  // del mismo, un div con la clase "tarjeta__contenido".
  // Añade además el valor del elemento como contenido de la tarjeta

  // EJERCICIO: una vez has creado la tarjeta, y todavía dentro del
  // loop, añade la tarjeta generada como "child" del nodo mesa.

  // BONUS: podrías hacer que las tarjetas solo se repartieran cuando
  // se apriete un botón que ponga "repartir cartas"


// function descubrir() {
//   this.classList.add("descubierta");
// }



// document.querySelectorAll(".tarjeta").forEach(function(elemento) {
//   elemento.addEventListener("click", descubrir);
// });
