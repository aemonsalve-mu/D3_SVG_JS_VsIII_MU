// 1. Preparamos una escala sencilla.
const escala = d3.scaleBand().domain(["A", "B", "C"]).range([0, 300]).padding(0.2);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Paso: " + escala.step() + "\n" +
  "Ancho: " + escala.bandwidth()
);
