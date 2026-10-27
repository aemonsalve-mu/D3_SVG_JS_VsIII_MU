// 1. domain contiene los datos; range, las salidas.
const escala = d3.scaleQuantize().domain([0,100]).range(["Bajo","Medio","Alto"]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala(0) + "\n" +
  "Salida 2: " + escala(50) + "\n" +
  "Salida 3: " + escala(100)
);
