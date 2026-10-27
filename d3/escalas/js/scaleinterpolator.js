// 1. Preparamos una escala sencilla.
const escala = d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateViridis);
const antes = escala(50);
escala.interpolator(d3.interpolateBlues);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Viridis para 50: " + antes + "\n" +
  "Blues para 50: " + escala(50)
);
