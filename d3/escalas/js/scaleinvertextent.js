// 1. Preparamos una escala sencilla.
const escala = d3.scaleThreshold().domain([50, 80]).range(["Bajo", "Medio", "Alto"]);
const medio = escala.invertExtent("Medio");
const bajo = escala.invertExtent("Bajo");

// 2. Comparamos valores concretos antes y después del método.
d3.select("#salida").text(
  "Límite inferior de Medio: " + medio[0] + "\n" +
  "Límite superior de Medio: " + medio[1] + "\n" +
  "Límite inferior de Bajo: " + bajo[0] + "\n" +
  "Límite superior de Bajo: " + bajo[1]
);
