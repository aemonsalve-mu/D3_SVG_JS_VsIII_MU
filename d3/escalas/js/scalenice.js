// 1. Preparamos una escala sencilla.
const escala = d3.scaleLinear().domain([3, 97]);
escala.nice(5);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Dominio ajustado: " + escala.domain()
);
