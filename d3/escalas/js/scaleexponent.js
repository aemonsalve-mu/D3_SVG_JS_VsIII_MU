// 1. Preparamos una escala sencilla.
const escala = d3.scalePow().domain([0, 100]).range([0, 400]).exponent(2);
const antes = escala(50);
escala.exponent(0.5);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Exponente 2: " + antes + "\n" +
  "Exponente 0.5: " + escala(50)
);
