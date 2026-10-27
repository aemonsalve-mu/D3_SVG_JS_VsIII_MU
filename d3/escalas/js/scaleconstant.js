// 1. Preparamos una escala sencilla.
const escala = d3.scaleSymlog().domain([-100, 100]).range([0, 400]).constant(10);
const antes = escala(10);
escala.constant(1);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Con constante 10: " + antes + "\n" +
  "Con constante 1: " + escala(10)
);
