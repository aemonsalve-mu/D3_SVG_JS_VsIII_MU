// 1. Preparamos una escala sencilla.
const escala = d3.scaleQuantize().domain([0, 100]).range(["Bajo", "Medio", "Alto"]);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Cortes: " + escala.thresholds()
);
