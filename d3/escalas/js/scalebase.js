// 1. Preparamos una escala sencilla.
const escala = d3.scaleLog().domain([1, 100]).range([0, 400]);
const antes = escala(10);
const marcasAntes = escala.ticks();
escala.base(2);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Posición antes: " + antes + "\n" +
  "Posición después: " + escala(10) + "\n" +
  "Marcas antes: " + marcasAntes + "\n" +
  "Marcas después: " + escala.ticks()
);
