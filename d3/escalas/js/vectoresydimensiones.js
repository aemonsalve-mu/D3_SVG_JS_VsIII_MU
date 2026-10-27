// 1. Este vector contiene el tamaño del lienzo, no tres datos.
const dimensiones = [600, 240];
const ancho = dimensiones[0];
const alto = dimensiones[1];
d3.select("#lienzo").attr("viewBox", "0 0 " + ancho + " " + alto);

// 2. Cada pareja contiene [ancho, alto] de UN rectángulo.
const medidas = [[60, 40], [120, 80], [180, 120]];

// 3. data asigna una pareja a cada rectángulo que ya está en el HTML.
const rectangulos = d3.select("#figuras").selectAll("rect").data(medidas);

// 4. d es ahora una pareja, por ejemplo [60, 40].
rectangulos.attr("width", function(d) {
  return d[0];
});
rectangulos.attr("height", function(d) {
  return d[1];
});

d3.select("#salida").text(
  "Lienzo: " + ancho + " × " + alto + "\n" +
  "Primera figura: " + medidas[0][0] + " × " + medidas[0][1] + "\n" +
  "Segunda figura: " + medidas[1][0] + " × " + medidas[1][1]
);
