// 1. Preparamos una escala sencilla.
const escala = d3.scaleBand().domain(["A", "B", "C"]).range([0, 300]);
escala.paddingInner(0.3);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Ancho: " + escala.bandwidth() + "\n" +
  "Paso: " + escala.step()
);
