// 1. Preparamos una escala sencilla.
const escala = d3.scaleLinear().domain([0, 100]).range([40, 500]);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Dato para la posición 270: " + escala.invert(270)
);
