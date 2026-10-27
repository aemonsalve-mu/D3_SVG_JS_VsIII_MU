const circulo = d3.select("#circulo");

// La animación empieza al pulsar el botón del HTML.
d3.select("#animar").on("click", function() {
  circulo.interrupt().attr("cx", 50);
  circulo.transition().duration(700).attr("cx", 450);
});
