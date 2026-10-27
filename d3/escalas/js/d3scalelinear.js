// 1. El tamaño del lienzo se guarda como [ancho, alto].
const dimensiones = [500, 240];
const ancho = dimensiones[0];
const alto = dimensiones[1];
const margen = 50;
d3.select("#lienzo").attr("viewBox", "0 0 " + ancho + " " + alto);

// 2. Este otro vector contiene tres datos, no dimensiones.
const datos = [20, 50, 100];
const escala = d3.scaleLinear();
escala.domain([0, 100]);
escala.range([0, ancho - 2 * margen]);

// 3. Cada rectángulo recibe un dato. La escala calcula su ancho.
const barras = d3.select("#barras").selectAll("rect").data(datos);
barras.attr("width", function(d) {
  return escala(d);
});

d3.select("#salida").text(
  "Ancho útil: " + (ancho - 2 * margen) + "\n" +
  "Dato 20 → ancho " + escala(20) + "\n" +
  "Dato 50 → ancho " + escala(50) + "\n" +
  "Dato 100 → ancho " + escala(100)
);
