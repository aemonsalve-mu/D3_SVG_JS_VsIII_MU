// 1. domain contiene los datos; range, las salidas.
const escala = d3.scaleSqrt().domain([0,100]).range([0,30]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala(25) + "\n" +
  "Salida 2: " + escala(100)
);

// 3. La escala calcula radios; las áreas guardan proporción.
d3.select("#pequena").attr("r", escala(25));
d3.select("#grande").attr("r", escala(100));
