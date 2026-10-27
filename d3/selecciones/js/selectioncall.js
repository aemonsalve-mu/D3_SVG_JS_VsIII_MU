// 1. Esta función recibe una selección y un color.
function colorear(seleccion, color) {
  seleccion.style("color", color);
}
// 2. call entrega los argumentos a la función.
d3.select("#norte").call(colorear, "teal");
// 3. Reutilizamos la función y seguimos con style.
d3.select("#sur").call(colorear, "orange").style("font-weight", "bold");
