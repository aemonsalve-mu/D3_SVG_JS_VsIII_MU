// 1. Preparamos una escala sencilla.
const escala = d3.scaleBand().domain(["A", "B"]).range([0, 300]).paddingOuter(1);
escala.align(0);
const antes = escala("A");
escala.align(1);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "A con align 0: " + antes + "\n" +
  "A con align 1: " + escala("A")
);
