const lista = d3.select("#lista");
// 1. update contiene el nodo existente en la primera posición.
const update = lista.selectAll("p").data(["Norte", "Sur"]);
// 2. enter crea el nodo que falta en la segunda posición.
const enter = update.enter().append("p");
// 3. Aplicamos el mismo texto y estilo a los dos.
enter.merge(update).text(function(d) {
  return d;
}).style("color", "teal");
