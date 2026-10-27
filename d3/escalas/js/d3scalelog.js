// 1. domain contiene los datos; range, las salidas.
const escala = d3.scaleLog().domain([1,1000]).range([0,300]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala(1) + "\n" +
  "Salida 2: " + escala(10) + "\n" +
  "Salida 3: " + escala(100) + "\n" +
  "Salida 4: " + escala(1000)
);

// 3. Solo cambiamos cx: el círculo ya existe en el HTML.
d3.select("#marca").attr("cx", escala(100));
