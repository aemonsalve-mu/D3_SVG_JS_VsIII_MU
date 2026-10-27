// 1. domain contiene los datos; range, las salidas.
const escala = d3.scaleDiverging(d3.interpolateRdBu).domain([-20,0,20]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala(-20) + "\n" +
  "Salida 2: " + escala(0) + "\n" +
  "Salida 3: " + escala(20)
);

// 3. Aplicamos cada color a un rectángulo ya escrito en el HTML.
d3.select("#color-a").attr("fill", escala(-20));
d3.select("#color-b").attr("fill", escala(0));
d3.select("#color-c").attr("fill", escala(20));
