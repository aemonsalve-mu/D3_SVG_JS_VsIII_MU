// 1. domain contiene los datos; range, las salidas.
const escala = d3.scaleUtc().domain([new Date("2026-01-01T00:00:00Z"),new Date("2026-01-06T00:00:00Z")]).range([0,500]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala(new Date("2026-01-01T00:00:00Z")) + "\n" +
  "Salida 2: " + escala(new Date("2026-01-03T00:00:00Z")) + "\n" +
  "Salida 3: " + escala(new Date("2026-01-06T00:00:00Z"))
);

// 3. Solo cambiamos cx: el círculo ya existe en el HTML.
d3.select("#marca").attr("cx", escala(new Date("2026-01-03T00:00:00Z")));
