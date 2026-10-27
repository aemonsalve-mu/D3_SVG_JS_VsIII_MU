// 1. domain contiene los datos; range, las salidas.
const escala = d3.scalePoint().domain(["Norte","Centro","Sur"]).range([0,400]);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala("Norte") + "\n" +
  "Salida 2: " + escala("Centro") + "\n" +
  "Salida 3: " + escala("Sur")
);

// 3. Colocamos las tres marcas usando la escala.
d3.select("#marca-a").attr("cx", escala("Norte"));
d3.select("#marca-b").attr("cx", escala("Centro"));
d3.select("#marca-c").attr("cx", escala("Sur"));
