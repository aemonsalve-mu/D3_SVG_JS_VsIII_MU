const dimensiones = [500, 300];
const ancho = dimensiones[0];
const alto = dimensiones[1];
const margen = 40;
const base = alto - margen;
const datos = [25, 50, 75];
d3.select("#lienzo").attr("viewBox", "0 0 " + ancho + " " + alto);

// 0 se coloca abajo, en 260; 100 arriba, en 40.
const escalaY = d3.scaleLinear().domain([0, 100]).range([base, margen]);
const barras = d3.select("#barras").selectAll("rect").data(datos);

// y es la posición superior; height es la longitud hasta la base.
barras.attr("y", function(d) {
  return escalaY(d);
});
barras.attr("height", function(d) {
  return base - escalaY(d);
});
d3.select("#base").attr("y1", base).attr("y2", base).attr("x2", ancho - margen);

d3.select("#salida").text(
  "Base: " + base + "\n" +
  "Dato 75 → y = " + escalaY(75) + "\n" +
  "Dato 75 → height = " + (base - escalaY(75))
);
