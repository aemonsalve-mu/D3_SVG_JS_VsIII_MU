// 1. Preparamos una escala sencilla.
const escala = d3.scaleQuantile().domain([5, 8, 9, 10, 12, 15, 20, 90, 100]).range(["Bajo", "Medio", "Alto"]);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Cortes: " + escala.quantiles()
);
