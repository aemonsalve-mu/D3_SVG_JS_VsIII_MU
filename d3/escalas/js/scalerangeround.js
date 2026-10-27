// 1. Preparamos una escala sencilla.
const escala = d3.scaleLinear().domain([0, 3]).rangeRound([0, 100]);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Para 1: " + escala(1) + "\n" +
  "Para 2: " + escala(2)
);
