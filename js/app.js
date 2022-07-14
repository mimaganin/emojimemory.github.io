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