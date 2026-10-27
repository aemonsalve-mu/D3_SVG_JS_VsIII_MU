// 1. Guardar un dato NO cambia el texto que había.
d3.select("#norte").datum(40);
d3.select("#sur").datum(70);
// 2. Leemos el dato de Norte.
const venta = d3.select("#norte").datum();
d3.select("#salida").text("Dato de Norte: " + venta);
// 3. Ahora escribimos texto a partir de cada dato.
d3.selectAll("#demo p").text(function(d) {
  return "Venta: " + d;
});
