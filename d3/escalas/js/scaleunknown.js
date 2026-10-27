// 1. Preparamos una escala sencilla.
const escala = d3.scaleOrdinal().domain(["Norte", "Sur"]).range(["teal", "orange"]);
escala.unknown("gray");

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Oeste: " + escala("Oeste") + "\n" +
  "Dominio conservado: " + escala.domain()
);
