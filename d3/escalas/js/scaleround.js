// 1. Preparamos una escala sencilla.
const escala = d3.scaleBand().domain(["A", "B", "C"]).range([0, 100]);
escala.round(true);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "A: " + escala("A") + "\n" +
  "B: " + escala("B") + "\n" +
  "C: " + escala("C")
);
