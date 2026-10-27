// 1. domain contiene los datos; range, las salidas.
const escala = d3.scaleOrdinal().domain(["Norte","Centro","Sur"]).range(["teal","orange","purple"]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala("Norte") + "\n" +
  "Salida 2: " + escala("Centro") + "\n" +
  "Salida 3: " + escala("Sur")
);

// 3. Aplicamos cada color a un rectángulo ya escrito en el HTML.
d3.select("#color-a").attr("fill", escala("Norte"));
d3.select("#color-b").attr("fill", escala("Centro"));
d3.select("#color-c").attr("fill", escala("Sur"));
