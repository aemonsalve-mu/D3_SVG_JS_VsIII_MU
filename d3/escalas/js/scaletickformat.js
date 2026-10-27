// 1. Preparamos una escala sencilla.
const escala = d3.scaleLinear().domain([0, 1]);
const formato = escala.tickFormat(5, ".0%");

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Marcas formateadas: " + formato(0) + ", " + formato(0.2) + ", " + formato(0.4) + ", " + formato(0.6) + ", " + formato(0.8) + ", " + formato(1)
);
