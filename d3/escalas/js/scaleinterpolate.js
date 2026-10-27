// 1. Preparamos una escala sencilla.
const escala = d3.scaleLinear().domain([0, 100]).range(["white", "teal"]);
escala.interpolate(d3.interpolateHcl);

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Color para 50: " + escala(50)
);
d3.select("#muestra").attr("fill", escala(50));
