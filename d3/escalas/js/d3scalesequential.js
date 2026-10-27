// 1. domain contiene los datos; range, las salidas.
const escala = d3.scaleSequential(d3.interpolateViridis).domain([0,100]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala(0) + "\n" +
  "Salida 2: " + escala(50) + "\n" +
  "Salida 3: " + escala(100)
);

// 3. Aplicamos cada color a un rectángulo ya escrito en el HTML.
d3.select("#color-a").attr("fill", escala(0));
d3.select("#color-b").attr("fill", escala(50));
d3.select("#color-c").attr("fill", escala(100));
