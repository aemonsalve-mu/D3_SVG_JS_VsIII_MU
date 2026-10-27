// 1. domain contiene los datos; range, las salidas.
const escala = d3.scaleTime().domain([new Date(2026,0,1),new Date(2026,0,6)]).range([0,500]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala(new Date(2026, 0, 1)) + "\n" +
  "Salida 2: " + escala(new Date(2026, 0, 3)) + "\n" +
  "Salida 3: " + escala(new Date(2026, 0, 6))
);

// 3. Solo cambiamos cx: el círculo ya existe en el HTML.
d3.select("#marca").attr("cx", escala(new Date(2026, 0, 3)));
