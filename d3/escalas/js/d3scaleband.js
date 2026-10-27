// 1. domain contiene los datos; range, las salidas.
const escala = d3.scaleBand().domain(["Norte","Centro","Sur"]).range([0,400]).padding(.2);

// 2. Llamamos a la escala con valores concretos.
d3.select("#salida").text(
  "Salida 1: " + escala("Norte") + "\n" +
  "Salida 2: " + escala("Centro") + "\n" +
  "Salida 3: " + escala("Sur")
);

// 3. Colocamos las tres marcas usando la escala.
d3.select("#marca-a").attr("x", escala("Norte")).attr("width", escala.bandwidth());
d3.select("#marca-b").attr("x", escala("Centro")).attr("width", escala.bandwidth());
d3.select("#marca-c").attr("x", escala("Sur")).attr("width", escala.bandwidth());
