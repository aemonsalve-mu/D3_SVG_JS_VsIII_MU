// 1. Preparamos una escala sencilla.
const escala = d3.scaleLinear().domain([0, 100]).range([0, 400]);
const sinLimite = escala(150);
escala.clamp(true);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Sin límite: " + sinLimite + "\n" +
  "Con límite: " + escala(150) + "\n" +
  "Inversa limitada: " + escala.invert(600)
);
