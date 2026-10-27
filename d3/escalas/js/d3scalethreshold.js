// 1. domain contiene los datos; range, las salidas.
const escala = d3.scaleThreshold().domain([90,100]).range(["Revisar","Cerca","Cumple"]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala(80) + "\n" +
  "Salida 2: " + escala(90) + "\n" +
  "Salida 3: " + escala(100)
);
