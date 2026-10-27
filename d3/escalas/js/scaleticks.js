// 1. Preparamos una escala sencilla.
const escala = d3.scaleLinear().domain([3, 97]);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Marcas sugeridas: " + escala.ticks(5)
);
