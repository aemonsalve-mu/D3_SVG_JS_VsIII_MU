// 1. domain contiene los datos; range, las salidas.
const escala = d3.scaleSymlog().constant(10).domain([-100,100]).range([0,400]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala(-100) + "\n" +
  "Salida 2: " + escala(0) + "\n" +
  "Salida 3: " + escala(100)
);

// 3. Solo cambiamos cx: el círculo ya existe en el HTML.
d3.select("#marca").attr("cx", escala(0));
