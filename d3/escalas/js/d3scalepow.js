// 1. domain contiene los datos; range, las salidas.
const escala = d3.scalePow().exponent(2).domain([0,100]).range([0,400]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala(0) + "\n" +
  "Salida 2: " + escala(25) + "\n" +
  "Salida 3: " + escala(50) + "\n" +
  "Salida 4: " + escala(100)
);

// 3. Solo cambiamos cx: el círculo ya existe en el HTML.
d3.select("#marca").attr("cx", escala(50));
