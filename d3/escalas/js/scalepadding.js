// 1. Preparamos una escala sencilla.
const escala = d3.scaleBand().domain(["A", "B", "C"]).range([0, 300]);
const antes = escala.bandwidth();
escala.padding(0.2);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Ancho inicial: " + antes + "\n" +
  "Ancho con separación: " + escala.bandwidth()
);
