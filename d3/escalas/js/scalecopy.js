// 1. Preparamos una escala sencilla.
const original = d3.scaleLinear().domain([0, 100]).range([0, 400]);
const copia = original.copy();
copia.domain([0, 200]);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Original para 50: " + original(50) + "\n" +
  "Copia para 50: " + copia(50) + "\n" +
  "Dominio original: " + original.domain()
);
