// 1. Preparamos una escala sencilla.
const escala = d3.scaleBand().domain(["A", "B", "C"]).range([0, 300]);
escala.paddingOuter(0.5);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Inicio de A: " + escala("A") + "\n" +
  "Ancho: " + escala.bandwidth()
);
